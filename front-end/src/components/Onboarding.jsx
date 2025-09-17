import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

const Onboarding = () => {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [onboardingData, setOnboardingData] = useState({
    country: '',
    knownLanguage: '',
    targetLanguage: '',
    interests: [],
    profilePicture: null
  })

  const totalSteps = 5

  // Country options (popular countries for language exchange)
  const countries = [
    'United States', 'United Kingdom', 'Canada', 'Australia', 'France', 'Germany', 
    'Spain', 'Italy', 'Japan', 'South Korea', 'China', 'Brazil', 'Mexico', 
    'Netherlands', 'Sweden', 'Norway', 'Portugal', 'Russia', 'India', 'Other'
  ]

  // Language options
  const languages = [
    'English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 'Russian',
    'Japanese', 'Korean', 'Chinese (Mandarin)', 'Chinese (Cantonese)', 'Arabic',
    'Hindi', 'Dutch', 'Swedish', 'Norwegian', 'Danish', 'Polish', 'Turkish', 'Other'
  ]

  // Interest options
  const interestOptions = [
    'Travel', 'Movies & TV', 'Music', 'Sports', 'Technology', 'Food & Cooking',
    'Art & Design', 'Photography', 'Reading', 'Gaming', 'Fitness', 'Business',
    'Science', 'History', 'Fashion', 'Nature', 'Pets', 'Culture'
  ]

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      // Complete onboarding
      console.log('Onboarding completed:', onboardingData)
      navigate('/home')
    }
  }

  const handleSkip = () => {
    if (currentStep === 4) {
      // Skip interests
      setOnboardingData({ ...onboardingData, interests: [] })
    } else if (currentStep === 5) {
      // Skip profile picture
      setOnboardingData({ ...onboardingData, profilePicture: null })
    }
    handleNext()
  }

  const handleInterestToggle = (interest) => {
    const currentInterests = onboardingData.interests
    if (currentInterests.includes(interest)) {
      setOnboardingData({
        ...onboardingData,
        interests: currentInterests.filter(i => i !== interest)
      })
    } else {
      setOnboardingData({
        ...onboardingData,
        interests: [...currentInterests, interest]
      })
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setOnboardingData({ ...onboardingData, profilePicture: file })
    }
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1: return onboardingData.country !== ''
      case 2: return onboardingData.knownLanguage !== ''
      case 3: return onboardingData.targetLanguage !== ''
      case 4: return true // Interests are optional
      case 5: return true // Profile picture is optional
      default: return false
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-base-content mb-4">Where are you from?</h2>
            <p className="text-base-content/70 mb-8">This helps us connect you with language partners in compatible time zones.</p>
            
            <select 
              className="select select-bordered w-full max-w-md"
              value={onboardingData.country}
              onChange={(e) => setOnboardingData({ ...onboardingData, country: e.target.value })}
            >
              <option value="">Select your country</option>
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
        )

      case 2:
        return (
          <div className="text-center">
            <div className="w-20 h-20 bg-secondary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-10 h-10 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-base-content mb-4">What language do you know?</h2>
            <p className="text-base-content/70 mb-8">This is the language you'll teach to others.</p>
            
            <select 
              className="select select-bordered w-full max-w-md"
              value={onboardingData.knownLanguage}
              onChange={(e) => setOnboardingData({ ...onboardingData, knownLanguage: e.target.value })}
            >
              <option value="">Select your native/fluent language</option>
              {languages.map(language => (
                <option key={language} value={language}>{language}</option>
              ))}
            </select>
          </div>
        )

      case 3:
        return (
          <div className="text-center">
            <div className="w-20 h-20 bg-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-base-content mb-4">What language do you want to learn?</h2>
            <p className="text-base-content/70 mb-8">This is the language you'd like to practice and improve.</p>
            
            <select 
              className="select select-bordered w-full max-w-md"
              value={onboardingData.targetLanguage}
              onChange={(e) => setOnboardingData({ ...onboardingData, targetLanguage: e.target.value })}
            >
              <option value="">Select the language you want to learn</option>
              {languages.filter(lang => lang !== onboardingData.knownLanguage).map(language => (
                <option key={language} value={language}>{language}</option>
              ))}
            </select>
          </div>
        )

      case 4:
        return (
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-base-content mb-4">What are your interests?</h2>
            <p className="text-base-content/70 mb-8">This helps us match you with people who share your passions. (Optional)</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
              {interestOptions.map(interest => (
                <button
                  key={interest}
                  onClick={() => handleInterestToggle(interest)}
                  className={`btn btn-sm ${
                    onboardingData.interests.includes(interest) 
                      ? 'btn-primary' 
                      : 'btn-outline'
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>
        )

      case 5:
        return (
          <div className="text-center">
            <div className="w-20 h-20 bg-secondary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-10 h-10 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-base-content mb-4">Add a profile picture</h2>
            <p className="text-base-content/70 mb-8">Help others recognize you! (Optional)</p>
            
            <div className="max-w-md mx-auto">
              {onboardingData.profilePicture ? (
                <div className="mb-6">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden bg-base-200">
                    <img 
                      src={URL.createObjectURL(onboardingData.profilePicture)} 
                      alt="Profile preview" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button 
                    onClick={() => setOnboardingData({ ...onboardingData, profilePicture: null })}
                    className="btn btn-ghost btn-sm"
                  >
                    Remove photo
                  </button>
                </div>
              ) : (
                <div className="mb-6">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-base-200 flex items-center justify-center border-2 border-dashed border-base-300">
                    <svg className="w-12 h-12 text-base-content/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
              )}
              
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="file-input file-input-bordered w-full"
              />
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 flex items-center justify-center p-4">
      <div className="card w-full max-w-2xl bg-base-100 shadow-2xl border border-base-300">
        <div className="card-body p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Conversate Logo" className="w-8 h-8 object-contain" />
              <span className="text-xl font-bold text-primary">Conversate</span>
            </div>
            <div className="text-sm text-base-content/60">
              Step {currentStep} of {totalSteps}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {Array.from({ length: totalSteps }, (_, i) => (
                <div 
                  key={i}
                  className={`w-4 h-4 rounded-full ${
                    i + 1 <= currentStep ? 'bg-primary' : 'bg-base-300'
                  }`}
                />
              ))}
            </div>
            <div className="w-full bg-base-300 rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          {/* Step Content */}
          <div className="mb-8 min-h-[400px] flex items-center">
            {renderStepContent()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button 
              onClick={() => currentStep > 1 && setCurrentStep(currentStep - 1)}
              className={`btn btn-ghost ${currentStep === 1 ? 'invisible' : ''}`}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>

            <div className="flex space-x-2">
              {(currentStep === 4 || currentStep === 5) && (
                <button onClick={handleSkip} className="btn btn-ghost">
                  Skip
                </button>
              )}
              <button 
                onClick={handleNext}
                disabled={!isStepValid()}
                className="btn btn-primary"
              >
                {currentStep === totalSteps ? 'Complete Setup' : 'Continue'}
                {currentStep < totalSteps && (
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Onboarding
