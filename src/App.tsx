import { About } from './Components/About'
import Banner from './Components/Banner'
import { EventSchedule } from './Components/EventSchedule'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div className='h-screen'>
      <Banner/>   
      <Navbar/>
      <div className='flex flex-col gap-4 items-center'>
        <About text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima asperiores modi quis? Necessitatibus vel autem adipisci quisquam amet saepe, nemo molestiae dignissimos dicta qui exercitationem aut consectetur sit, culpa asperiores?
        Rem vero quidem labore cum accusamus atque aliquam nisi quo neque corrupti obcaecati incidunt placeat minus deserunt ducimus harum deleniti, iusto cupiditate libero assumenda eveniet. At aliquam sequi temporibus perspiciatis."/>  
      <EventSchedule/>
        <About text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima asperiores modi quis? Necessitatibus vel autem adipisci quisquam amet saepe, nemo molestiae dignissimos dicta qui exercitationem aut consectetur sit, culpa asperiores?
        Rem vero quidem labore cum accusamus atque aliquam nisi quo neque corrupti obcaecati incidunt placeat minus deserunt ducimus harum deleniti, iusto cupiditate libero assumenda eveniet. At aliquam sequi temporibus perspiciatis."/>  
</div>
</div>
  )
}

export default App
