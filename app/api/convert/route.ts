import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json()

    if (!text || typeof text !== 'string') {
      return NextResponse.json(
        { error: 'Invalid text input' },
        { status: 400 }
      )
    }

    // Clean and process the text
    const cleanText = text.toLowerCase().trim()
    
    // Simple sentence and word tokenization
    const sentences = cleanText.split(/[.!?]+/).filter(s => s.trim())
    let words: string[] = []
    
    sentences.forEach(sentence => {
      const sentenceWords = sentence.trim().split(/\s+/).filter(w => w.length > 0)
      words = words.concat(sentenceWords)
    })

    // Basic POS tagging simulation
    const tagged = words.map(word => {
      const pos = getSimplePOS(word)
      return { word, pos }
    })

    // Analyze tense
    const tenseAnalysis = {
      future: tagged.filter(t => ['will', 'shall', 'going', 'gonna'].includes(t.word)).length,
      present: tagged.filter(t => isPresent(t.word)).length,
      past: tagged.filter(t => isPast(t.word)).length,
      present_continuous: tagged.filter(t => t.word.endsWith('ing')).length,
    }

    // Define stop words (common English stop words)
    const stopWords = new Set([
      'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from',
      'has', 'he', 'in', 'is', 'it', 'its', 'of', 'on', 'that', 'the',
      'to', 'was', 'will', 'with', 'would', 'i', 'you', 'your', 'yours',
      'we', 'our', 'ours', 'they', 'them', 'their', 'theirs', 'this',
      'these', 'those', 'am', 'been', 'being', 'have', 'had', 'having',
      'do', 'does', 'did', 'doing', 'can', 'could', 'should', 'ought',
      'may', 'might', 'must', 'shall', 'would'
    ])

    // Filter and process words
    const filteredWords: string[] = []
    
    for (const taggedWord of tagged) {
      const word = taggedWord.word
      if (!stopWords.has(word) && word.length > 0) {
        // Simple stemming - remove common suffixes
        let processed = word
        if (word.endsWith('ing') && word.length > 4) {
          processed = word.slice(0, -3)
        } else if (word.endsWith('ed') && word.length > 3) {
          processed = word.slice(0, -2)
        } else if (word.endsWith('s') && word.length > 2) {
          processed = word.slice(0, -1)
        }
        filteredWords.push(processed)
      }
    }

    // Replace 'i' with 'Me' (ISL convention)
    let finalWords = filteredWords.map(word => word === 'i' ? 'Me' : word)

    // Add tense indicator
    const probableTense = Object.keys(tenseAnalysis).reduce((a, b) => 
      tenseAnalysis[a as keyof typeof tenseAnalysis] > tenseAnalysis[b as keyof typeof tenseAnalysis] ? a : b
    )

    let wordsWithTense = [...finalWords]
    
    if (probableTense === 'past' && tenseAnalysis.past >= 1) {
      wordsWithTense = ['Before', ...wordsWithTense]
    } else if (probableTense === 'future' && tenseAnalysis.future >= 1) {
      if (!wordsWithTense.includes('Will')) {
        wordsWithTense = ['Will', ...wordsWithTense]
      }
    } else if (probableTense === 'present_continuous' && tenseAnalysis.present_continuous >= 1) {
      wordsWithTense = ['Now', ...wordsWithTense]
    }

    // Simulate checking for sign language video availability
    // In a real implementation, this would check against a database of available sign videos
    const displayWords: string[] = []
    for (const word of wordsWithTense) {
      // Simulate 70% availability of sign videos
      const hasVideo = Math.random() > 0.3
      if (!hasVideo && word.length > 1) {
        // Split into letters if no video available (fingerspelling)
        displayWords.push(...word.toUpperCase().split(''))
      } else {
        displayWords.push(word.charAt(0).toUpperCase() + word.slice(1))
      }
    }

    return NextResponse.json({
      words: displayWords,
      text: cleanText,
      tense: probableTense,
      originalWords: wordsWithTense,
      analysis: {
        totalWords: words.length,
        filteredWords: finalWords.length,
        tenseAnalysis
      }
    })

  } catch (error) {
    console.error('Conversion error:', error)
    return NextResponse.json(
      { error: 'Failed to process text' },
      { status: 500 }
    )
  }
}

// Helper functions for POS tagging and tense detection
function getSimplePOS(word: string): string {
  if (word.endsWith('ing')) return 'VBG'
  if (word.endsWith('ed')) return 'VBD'
  if (word.endsWith('s') && word.length > 2) return 'VBZ'
  if (['will', 'shall', 'can', 'could', 'should', 'would', 'may', 'might', 'must'].includes(word)) return 'MD'
  if (['i', 'you', 'he', 'she', 'it', 'we', 'they'].includes(word)) return 'PRP'
  if (['the', 'a', 'an'].includes(word)) return 'DT'
  return 'NN' // Default to noun
}

function isPresent(word: string): boolean {
  const presentIndicators = ['am', 'is', 'are', 'do', 'does', 'have', 'has']
  return presentIndicators.includes(word) || (word.endsWith('s') && !word.endsWith('ss'))
}

function isPast(word: string): boolean {
  const pastIndicators = ['was', 'were', 'did', 'had']
  return pastIndicators.includes(word) || word.endsWith('ed')
}