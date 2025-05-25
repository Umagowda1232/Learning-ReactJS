import { useState } from 'react';

import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js'

function App() {
 // this useState always returns as Array, now we are distructuring the array
 const [ selectedTopic, setSelectedTopic ] = useState();

  //we can't use regular variable to update the UI
  //let tabContent = 'Please click a button';

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    // console.log(selectedButton);
    setSelectedTopic(selectedButton);
    //console.log(selectedTopic);
   }

   let tabContent = <p>Please select a topic.</p>

   if(selectedTopic) {
    tabContent = (
       <div id='tab-content'>
            <h3>{ EXAMPLES[selectedTopic].title}</h3>
            <p>{ EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                { EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
    );
   }

  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept 
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
          />
          <CoreConcept {...CORE_CONCEPTS[1]}
          />  {/* We can use like this too
           we get same results */}

          <CoreConcept 
            title={CORE_CONCEPTS[2].title}
            description={CORE_CONCEPTS[2].description}
            image={CORE_CONCEPTS[2].image}
          />
          <CoreConcept 
            title={CORE_CONCEPTS[3].title}
            description={CORE_CONCEPTS[3].description}
            image={CORE_CONCEPTS[3].image}
          />

        </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
             <TabButton 
             isSelected={selectedTopic === 'components'}
             onSelect={() => handleSelect('components')}>Components</TabButton>
             <TabButton
              isSelected={selectedTopic === 'jsx'}
              onSelect={() => handleSelect('jsx')}>JSX</TabButton>
             <TabButton
              isSelected={selectedTopic === 'props'}
              onSelect={() => handleSelect('props')}>Props</TabButton>
             <TabButton
              isSelected={selectedTopic === 'state'}
              onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
        
      </main>
    </div>
  );
}

export default App;
