'use client'

import { useState } from 'react'

export default function Home() {
  const [prompt, setPrompt] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{ url?: string; error?: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!prompt.trim()) return

    setIsLoading(true)
    setResult(null)

    try {
      
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      // Mock successful response
      setResult({ 
        url: `https://demo-${Date.now()}.vercel.app` 
      })
    } catch (error) {
      setResult({ 
        error: 'Failed to generate website. Please try again.' 
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Prompt to Website
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Describe your dream website in plain English, and watch it come to life instantly
          </p>
        </div>

        {/* Main Form */}
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
                Describe your website
              </label>
              <textarea
                id="prompt"
                rows={6}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Example: Build me a portfolio site with a dark theme, hero section, about me page, and contact form..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                disabled={isLoading}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || !prompt.trim()}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating Website...
                </div>
              ) : (
                'Generate Website'
              )}
            </button>
          </form>

          {/* Results */}
          {result && (
            <div className="mt-8 p-4 rounded-md">
              {result.url ? (
                <div className="bg-green-50 border border-green-200 rounded-md p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-green-800">
                        Website Generated Successfully!
                      </h3>
                      <div className="mt-2 text-sm text-green-700">
                        <p>Your website is live at:</p>
                        <a
                          href={result.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium underline hover:text-green-600"
                        >
                          {result.url}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-red-50 border border-red-200 rounded-md p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">
                        Generation Failed
                      </h3>
                      <div className="mt-2 text-sm text-red-700">
                        <p>{result.error}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Example Prompts */}
        <div className="mt-12">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Example prompts to try:</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div 
              className="bg-white p-4 rounded-lg shadow cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setPrompt("Create a modern portfolio website with a dark theme, hero section, about me page, skills showcase, and contact form")}
            >
              <p className="text-sm text-gray-700">Create a modern portfolio website with a dark theme, hero section, about me page, skills showcase, and contact form</p>
            </div>
            <div 
              className="bg-white p-4 rounded-lg shadow cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setPrompt("Build a landing page for a SaaS product with pricing tables, testimonials, and a call-to-action section")}
            >
              <p className="text-sm text-gray-700">Build a landing page for a SaaS product with pricing tables, testimonials, and a call-to-action section</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 