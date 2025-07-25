from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.staticfiles import finders

import nltk
from nltk.tokenize import PunktSentenceTokenizer, word_tokenize
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer

# Ensure punkt resource is available
nltk.download('punkt', quiet=True)
nltk.download('averaged_perceptron_tagger', quiet=True)
nltk.download('wordnet', quiet=True)


def home_view(request):
    return render(request, 'home.html')


def about_view(request):
    return render(request, 'about.html')


def contact_view(request):
    return render(request, 'contact.html')


@login_required(login_url="login")
def animation_view(request):
    if request.method == 'POST':
        text = request.POST.get('sen', '')
        text = text.lower()

        # Tokenize sentences -> words
        sentence_tokenizer = PunktSentenceTokenizer()
        sentences = sentence_tokenizer.tokenize(text)
        words = []
        for sentence in sentences:
            words.extend(word_tokenize(sentence))

        # POS tagging
        tagged = nltk.pos_tag(words)

        # Analyze tense
        tense = {
            "future": len([word for word in tagged if word[1] == "MD"]),
            "present": len([word for word in tagged if word[1] in ["VBP", "VBZ", "VBG"]]),
            "past": len([word for word in tagged if word[1] in ["VBD", "VBN"]]),
            "present_continuous": len([word for word in tagged if word[1] == "VBG"]),
        }

        # Stop words
        stop_words = set([
            "mightn't", 're', 'wasn', 'wouldn', 'be', 'has', 'that', 'does', 'shouldn', 'do',
            "you've", 'off', 'for', "didn't", 'm', 'ain', 'haven', "weren't", 'are', "she's",
            "wasn't", 'its', "haven't", "wouldn't", 'don', 'weren', 's', "you'd", "don't", 'doesn',
            "hadn't", 'is', 'was', "that'll", "should've", 'a', 'then', 'the', 'mustn', 'i', 'nor',
            'as', "it's", "needn't", 'd', 'am', 'have', 'hasn', 'o', "aren't", "you'll", "couldn't",
            "you're", "mustn't", 'didn', "doesn't", 'll', 'an', 'hadn', 'whom', 'y', "hasn't",
            'itself', 'couldn', 'needn', "shan't", 'isn', 'been', 'such', 'shan', "shouldn't",
            'aren', 'being', 'were', 'did', 'ma', 't', 'having', 'mightn', 've', "isn't", "won't"
        ])

        # Lemmatize and filter
        lemmatizer = WordNetLemmatizer()
        filtered_text = []

        for w, p in zip(words, tagged):
            if w not in stop_words:
                if p[1] in ['VBG', 'VBD', 'VBZ', 'VBN', 'NN']:
                    filtered_text.append(lemmatizer.lemmatize(w, pos='v'))
                elif p[1] in ['JJ', 'JJR', 'JJS', 'RBR', 'RBS']:
                    filtered_text.append(lemmatizer.lemmatize(w, pos='a'))
                else:
                    filtered_text.append(lemmatizer.lemmatize(w))

        # Replace 'I' ➝ 'Me'
        final_words = ['Me' if w == 'I' else w for w in filtered_text]

        # Add tense word if necessary
        probable_tense = max(tense, key=tense.get)

        if probable_tense == "past" and tense["past"] >= 1:
            final_words = ["Before"] + final_words
        elif probable_tense == "future" and tense["future"] >= 1:
            if "Will" not in final_words:
                final_words = ["Will"] + final_words
        elif probable_tense == "present" and tense["present_continuous"] >= 1:
            final_words = ["Now"] + final_words

        # Check for animation mp4 presence
        display_words = []
        for word in final_words:
            path = word + ".mp4"
            if not finders.find(path):
                display_words.extend(list(word))  # Letter by letter
            else:
                display_words.append(word)

        return render(request, 'animation.html', {'words': display_words, 'text': text})
    else:
        return render(request, 'animation.html')


def signup_view(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('animation')
    else:
        form = UserCreationForm()
    return render(request, 'signup.html', {'form': form})


def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            if 'next' in request.POST:
                return redirect(request.POST.get('next'))
            else:
                return redirect('animation')
    else:
        form = AuthenticationForm()
    return render(request, 'login.html', {'form': form})


def logout_view(request):
    logout(request)
    return redirect("home")
