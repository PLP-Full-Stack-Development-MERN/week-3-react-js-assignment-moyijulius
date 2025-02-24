import { useState } from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import Counter from './components/Counter'

function App() {
  const [userProfile, setUserProfile] = useState({
    name: "John Doe",
    email: "john@example.com"
  });

  const handleProfileUpdate = (newProfile) => {
    setUserProfile(newProfile);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Profile
          name={userProfile.name}
          email={userProfile.email}
          onUpdate={handleProfileUpdate}
        />
        <Counter />
      </main>
    </div>
  );
}

export default App;