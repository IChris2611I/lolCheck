import Main from './components/homePage/ui/Main';
import Nav from './components/homePage/ui/Nav';
import Section from './components/homePage/ui/Section';

export default function App() {
  return (
    <div className="h-screen w-screen bg-cover bg-lol grid grid-cols-12 grid-rows-12 ">
      <div className="bg-black/10 backdrop-blur-sm col-span-full row-span-full"></div>
      <div className="h-full w-ful grid grid-cols-12 grid-rows-12 col-start-2 col-span-10 row-start-2 row-span-9  rounded-xl  backdrop-blur-sm bg-darkBg/90 border border-white/20">
        <Section />
        <Nav />
        <Main />
      </div>
    </div>
  );
}
