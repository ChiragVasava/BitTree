"use client"
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

const Generate = () => {
  const searchParams = useSearchParams()
  const [links, setLinks] = useState([{ link: "", linktext: "" }])
  const [handle, sethandle] = useState(searchParams.get('handle'))
  const [pic, setpic] = useState("")
  const [desc, setdesc] = useState("")
  const [currentStep, setCurrentStep] = useState(1)

  const handleChange = (index, link, linktext) => {
    setLinks((initialLinks) => {
      return initialLinks.map((item, i) => {
        if (i == index) {
          return { link, linktext }
        }
        else {
          return item
        }
      })
    })
  }

  const addLink = () => {
    setLinks(links.concat([{ link: "", linktext: "" }]))
  }

  const removeLink = (index) => {
    if (links.length > 1) {
      setLinks(links.filter((_, i) => i !== index))
    }
  }

  const submitLinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "links": links,
      "handle": handle,
      "pic": pic,
      "desc": desc
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    try {
      const r = await fetch("http://localhost:3000/api/add", requestOptions)
      const result = await r.json()
      if (result.success) {
        toast.success(result.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
        setLinks([{ link: "", linktext: "" }])
        setpic("")
        sethandle("")
        setdesc("")
        setCurrentStep(1)
      }
      else {
        toast.error(result.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
      }
    } catch (error) {
      console.error("Error submitting links:", error);
      if (error instanceof TypeError) {
        toast.error("Network error. Please check your connection.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  }

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const isStepValid = (step) => {
    switch (step) {
      case 1: return handle && handle.trim() !== ""
      case 2: return links.some(link => link.linktext.trim() !== "" && link.link.trim() !== "")
      case 3: return pic.trim() !== "" && desc.trim() !== ""
      default: return false
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50'>
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className='text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent'>
                Create Your BitTree
              </h1>
              <p className="text-gray-600 mt-1">Build your personalized link-in-bio page in 3 simple steps</p>
            </div>
            {/* Progress Steps */}
            <div className="hidden md:flex items-center space-x-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                    currentStep === step 
                      ? 'bg-purple-600 text-white shadow-lg' 
                      : isStepValid(step) 
                        ? 'bg-green-500 text-white' 
                        : currentStep > step 
                          ? 'bg-gray-300 text-gray-600' 
                          : 'bg-gray-200 text-gray-500'
                  }`}>
                    {isStepValid(step) && currentStep > step ? '✓' : step}
                  </div>
                  {step < 3 && <div className={`w-16 h-0.5 ${currentStep > step ? 'bg-green-500' : 'bg-gray-200'}`} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 py-8'>
        <div className='grid lg:grid-cols-2 gap-12 items-start'>
          
          {/* Form Section */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              
              {/* Mobile Progress */}
              <div className="md:hidden mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-gray-500">Step {currentStep} of 3</span>
                  <span className="text-sm text-purple-600">{Math.round((currentStep / 3) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(currentStep / 3) * 100}%` }}
                  />
                </div>
              </div>

              {/* Step 1: Handle */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-in fade-in duration-500">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h2 className='text-2xl font-bold text-gray-900 mb-2'>Choose Your Handle</h2>
                    <p className="text-gray-600">This will be your unique BitTree URL</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <span className="text-gray-500 font-medium">bittree.me/</span>
                      </div>
                      <input 
                        value={handle || ""} 
                        onChange={e => sethandle(e.target.value)} 
                        className='w-full pl-24 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-0 transition-all duration-300 bg-gray-50 focus:bg-white' 
                        type="text" 
                        placeholder='your-handle'
                      />
                    </div>
                    {handle && (
                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-green-700 text-sm">
                          ✓ Your BitTree will be available at: <strong>bittree.me/{handle}</strong>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Step 2: Links */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-in fade-in duration-500">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <h2 className='text-2xl font-bold text-gray-900 mb-2'>Add Your Links</h2>
                    <p className="text-gray-600">Add the links you want to share with your audience</p>
                  </div>

                  <div className="space-y-4">
                    {links && links.map((item, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-xl border-2 border-gray-100 hover:border-gray-200 transition-all duration-300">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-semibold text-gray-700">Link #{index + 1}</span>
                          {links.length > 1 && (
                            <button 
                              onClick={() => removeLink(index)}
                              className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50 transition-all duration-200"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          )}
                        </div>
                        <div className="space-y-3">
                          <input 
                            value={item.linktext || ""} 
                            onChange={e => handleChange(index, item.link, e.target.value)} 
                            className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-0 transition-all duration-300' 
                            type="text" 
                            placeholder='Link title (e.g., My Instagram)' 
                          />
                          <input 
                            value={item.link || ""} 
                            onChange={e => handleChange(index, e.target.value, item.linktext)} 
                            className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-0 transition-all duration-300'
                            type="url" 
                            placeholder='https://example.com' 
                          />
                        </div>
                      </div>
                    ))}
                    
                    <button 
                      onClick={addLink} 
                      className='w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-300 font-medium'
                    >
                      + Add Another Link
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Profile */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-in fade-in duration-500">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h2 className='text-2xl font-bold text-gray-900 mb-2'>Complete Your Profile</h2>
                    <p className="text-gray-600">Add your profile picture and description</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Profile Picture URL</label>
                      <input 
                        value={pic || ""} 
                        onChange={e => setpic(e.target.value)} 
                        className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-0 transition-all duration-300' 
                        type="url" 
                        placeholder='https://example.com/your-photo.jpg' 
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Bio Description</label>
                      <textarea 
                        value={desc || ""} 
                        onChange={e => setdesc(e.target.value)} 
                        className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-0 transition-all duration-300 resize-none' 
                        rows="3"
                        placeholder='Tell people about yourself...' 
                      />
                    </div>

                    {pic && (
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-green-700 text-sm mb-2">Profile Preview:</p>
                        <div className="flex items-center space-x-3">
                          <img src={pic} alt="Preview" className="w-12 h-12 rounded-full object-cover" />
                          <div>
                            <p className="font-semibold text-gray-900">@{handle}</p>
                            <p className="text-sm text-gray-600">{desc}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-100">
                <button 
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="px-6 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-all duration-200"
                >
                  ← Previous
                </button>

                <div className="flex space-x-3">
                  {currentStep < 3 ? (
                    <button 
                      onClick={nextStep}
                      disabled={!isStepValid(currentStep)}
                      className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Next Step →
                    </button>
                  ) : (
                    <button 
                      onClick={submitLinks}
                      disabled={!isStepValid(1) || !isStepValid(2) || !isStepValid(3)}
                      className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Create BitTree 🚀
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Preview Section */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Live Preview</h3>
              
              {/* Phone Mockup */}
              <div className="mx-auto w-80">
                <div className="bg-gray-900 rounded-3xl p-2 shadow-2xl">
                  <div className="bg-white rounded-2xl overflow-hidden">
                    <div className="relative h-[600px] bg-gradient-to-br from-purple-50 to-indigo-50 p-6">
                      
                      {/* Profile Section */}
                      <div className="text-center mb-6">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200 border-4 border-white shadow-lg">
                          {pic ? (
                            <img src={pic} alt="Profile" className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                              <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </div>
                          )}
                        </div>
                        <h3 className="font-bold text-lg text-gray-900">
                          {handle ? `@${handle}` : '@your-handle'}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                          {desc || 'Your bio description will appear here'}
                        </p>
                      </div>

                      {/* Links Preview */}
                      <div className="space-y-3">
                        {links.filter(link => link.linktext.trim() !== '').length > 0 ? (
                          links.filter(link => link.linktext.trim() !== '').map((item, index) => (
                            <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
                              <p className="text-gray-900 font-medium text-center truncate">
                                {item.linktext || `Link ${index + 1}`}
                              </p>
                            </div>
                          ))
                        ) : (
                          <div className="space-y-3">
                            <div className="bg-gray-100 rounded-xl p-4 animate-pulse">
                              <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
                            </div>
                            <div className="bg-gray-100 rounded-xl p-4 animate-pulse">
                              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Footer */}
                      <div className="absolute bottom-4 left-0 right-0 text-center">
                        <p className="text-xs text-gray-400">Powered by BitTree</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastClassName="shadow-lg"
      />
    </div>
  )
}

export default Generate