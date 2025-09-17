import React, { useState } from 'react'
import logo from '../assets/logo.png'

const Home = () => {
  const [activeTab, setActiveTab] = useState('chat')
  const [user] = useState({
    name: 'Sarah Johnson',
    avatar: null,
    knownLanguage: 'English',
    targetLanguage: 'French',
    country: 'United States'
  })

  // Mock data for chats
  const [chats] = useState([
    {
      id: 1,
      name: 'Pierre Dubois',
      avatar: null,
      lastMessage: 'Bonjour! How was your day?',
      time: '2m ago',
      unread: 2,
      language: 'French',
      isOnline: true
    },
    {
      id: 2,
      name: 'Maria Garcia',
      avatar: null,
      lastMessage: 'Thanks for the Spanish lesson!',
      time: '1h ago',
      unread: 0,
      language: 'Spanish',
      isOnline: false
    },
    {
      id: 3,
      name: 'Hans Mueller',
      avatar: null,
      lastMessage: 'Guten Tag! Ready for practice?',
      time: '3h ago',
      unread: 1,
      language: 'German',
      isOnline: true
    }
  ])

  // Mock data for potential connections
  const [connections] = useState([
    {
      id: 1,
      name: 'Antoine Laurent',
      avatar: null,
      age: 28,
      country: 'France',
      knownLanguage: 'French',
      targetLanguage: 'English',
      interests: ['Travel', 'Movies', 'Cooking'],
      isOnline: true,
      compatibility: 95
    },
    {
      id: 2,
      name: 'Emma Wilson',
      avatar: null,
      age: 24,
      country: 'Australia',
      knownLanguage: 'English',
      targetLanguage: 'French',
      interests: ['Music', 'Art', 'Reading'],
      isOnline: false,
      compatibility: 87
    },
    {
      id: 3,
      name: 'Luis Rodriguez',
      avatar: null,
      age: 31,
      country: 'Spain',
      knownLanguage: 'Spanish',
      targetLanguage: 'English',
      interests: ['Sports', 'Technology', 'Travel'],
      isOnline: true,
      compatibility: 82
    }
  ])

  const renderChatTab = () => (
    <div className="flex-1 flex flex-col">
      {/* Chat Header */}
      <div className="bg-base-100 border-b border-base-200 p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-base-content">Messages</h2>
          <button className="btn btn-circle btn-ghost">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
        
        {/* Search */}
        <div className="mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search conversations..."
              className="input input-bordered w-full pl-10"
            />
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-base-content/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {chats.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center p-8">
            <div className="w-24 h-24 bg-base-200 rounded-full flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-base-content/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-base-content mb-2">No conversations yet</h3>
            <p className="text-base-content/60 mb-4">Start connecting with language partners to begin chatting!</p>
            <button 
              onClick={() => setActiveTab('connect')}
              className="btn btn-primary"
            >
              Find Language Partners
            </button>
          </div>
        ) : (
          <div className="divide-y divide-base-200">
            {chats.map(chat => (
              <div key={chat.id} className="p-4 hover:bg-base-50 cursor-pointer transition-colors">
                <div className="flex items-center space-x-3">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="font-medium text-primary">{chat.name.charAt(0)}</span>
                    </div>
                    {chat.isOnline && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-base-100"></div>
                    )}
                  </div>
                  
                  {/* Chat Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium text-base-content truncate">{chat.name}</h3>
                        <span className="text-xs bg-base-200 text-base-content/70 px-2 py-1 rounded-full">
                          {chat.language}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-base-content/60">{chat.time}</span>
                        {chat.unread > 0 && (
                          <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                            <span className="text-xs font-medium text-white">{chat.unread}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-base-content/70 truncate mt-1">{chat.lastMessage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )

  const renderConnectTab = () => (
    <div className="flex-1 flex flex-col">
      {/* Connect Header */}
      <div className="bg-base-100 border-b border-base-200 p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-base-content">Find Language Partners</h2>
          <button className="btn btn-circle btn-ghost">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
            </svg>
          </button>
        </div>
        
        {/* Filters */}
        <div className="mt-4 flex flex-wrap gap-2">
          <div className="badge badge-primary badge-outline">
            Learning: {user.targetLanguage}
          </div>
          <div className="badge badge-secondary badge-outline">
            Teaching: {user.knownLanguage}
          </div>
          <button className="btn btn-xs btn-ghost">
            + Add Filters
          </button>
        </div>
      </div>

      {/* Connection Cards */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="grid gap-4">
          {connections.map(connection => (
            <div key={connection.id} className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
              <div className="card-body p-6">
                <div className="flex items-start justify-between">
                  {/* User Info */}
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center">
                        <span className="text-xl font-medium text-secondary">{connection.name.charAt(0)}</span>
                      </div>
                      {connection.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full border-2 border-base-100"></div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-lg font-semibold text-base-content">{connection.name}</h3>
                        <span className="text-sm text-base-content/60">({connection.age})</span>
                      </div>
                      
                      <div className="flex items-center space-x-1 mb-2">
                        <svg className="w-4 h-4 text-base-content/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm text-base-content/60">{connection.country}</span>
                      </div>
                      
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="text-sm">
                          <span className="text-base-content/60">Speaks:</span>
                          <span className="ml-1 font-medium text-primary">{connection.knownLanguage}</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-base-content/60">Learning:</span>
                          <span className="ml-1 font-medium text-secondary">{connection.targetLanguage}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {connection.interests.slice(0, 3).map(interest => (
                          <span key={interest} className="badge badge-ghost badge-sm">
                            {interest}
                          </span>
                        ))}
                        {connection.interests.length > 3 && (
                          <span className="badge badge-ghost badge-sm">
                            +{connection.interests.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Compatibility Score */}
                  <div className="text-center">
                    <div className="radial-progress text-primary" style={{"--value": connection.compatibility, "--size": "3rem"}}>
                      <span className="text-xs font-medium">{connection.compatibility}%</span>
                    </div>
                    <div className="text-xs text-base-content/60 mt-1">Match</div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-2 mt-4">
                  <button className="btn btn-primary flex-1">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Start Chat
                  </button>
                  <button className="btn btn-outline">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More */}
        <div className="text-center mt-6">
          <button className="btn btn-outline">
            Load More Matches
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-base-200">
      {/* Top Navigation */}
      <nav className="navbar bg-base-100 shadow-sm border-b border-base-200">
        <div className="navbar-start">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Conversate Logo" className="w-8 h-8 object-contain" />
            <span className="text-xl font-bold text-primary">Conversate</span>
          </div>
        </div>
        
        <div className="navbar-end">
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5-5 5-5h-5m-6 10H4l5-5-5-5h5m3 10V7" />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
            
            {/* User Menu */}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-medium text-primary">{user.name.charAt(0)}</span>
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Profile</a></li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar with Tabs */}
        <div className="w-80 bg-base-100 border-r border-base-200 flex flex-col">
          {/* Tab Navigation */}
          <div className="tabs tabs-bordered bg-base-100 p-2">
            <button 
              onClick={() => setActiveTab('chat')}
              className={`tab tab-bordered flex-1 ${activeTab === 'chat' ? 'tab-active' : ''}`}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Chat
            </button>
            <button 
              onClick={() => setActiveTab('connect')}
              className={`tab tab-bordered flex-1 ${activeTab === 'connect' ? 'tab-active' : ''}`}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Connect
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'chat' ? renderChatTab() : renderConnectTab()}
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 bg-base-100 flex items-center justify-center">
          <div className="text-center">
            <div className="w-32 h-32 bg-base-200 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-16 h-16 text-base-content/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-base-content mb-2">
              {activeTab === 'chat' ? 'Select a conversation' : 'Connect with language partners'}
            </h3>
            <p className="text-base-content/60 max-w-md">
              {activeTab === 'chat' 
                ? 'Choose a conversation from the sidebar to start chatting with your language partners.'
                : 'Browse potential language partners and start meaningful conversations to practice your target language.'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home