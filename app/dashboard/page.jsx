import React from 'react';
import NavigationComponent from './components/NavigationComponent';
import TopbarComponent from './components/TopbarComponent';
import HeroSectionComponent from './components/HeroSectionComponent';
import AboutSectioComponent from './components/AboutSectioComponent';
import ClassesSectionComponent from './components/ClassesSectionComponent';
import ActivitySectionComponent from './components/ActivitySectionComponent';

function page() {
  return (
    <div class="flex relative w-full">

       <NavigationComponent />
       <div class="flex">
       {/* <TopbarComponent />     */}
        {/* <HeroSectionComponent></HeroSectionComponent> */}
        {/* <ClassesSectionComponent></ClassesSectionComponent> */}
        {/* <ActivitySectionComponent></ActivitySectionComponent> */}

       </div>
        
    </div>
    
  )
}

export default page