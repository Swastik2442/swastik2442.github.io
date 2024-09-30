// Copyright 2022 Swastik Kulshreshtha <@Swastik2442>

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import Header from './components/header';
import Footer from './components/footer';
import AboutMe from './components/aboutMe';
import Projects from './components/projects';
import Skills from './components/skills';
import ContactMe from './components/contactMe';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <AboutMe />
        <Projects />
        <Skills />
        <ContactMe />
      </div>
      <Footer />
    </>
  );
}

export default App;
