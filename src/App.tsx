
import ExerciseList from './components/exerciseList/ExerciseList';
import ExerciseBanner from './components/exercisebanner/ExerciseBanner';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import NavItem from './components/navitem/NavItem';
import { navData } from './assets/data/navData';
import Logo from './components/logo/Logo';

function App() {
  return (
    <>
      <Header>
        <Logo title='Daily Routine' />
        <Nav>
          {
            navData.map(({ title, path, id }) => (
              <NavItem key={id} title={title} path={path}  />
            ))
          }
        </Nav>
      </Header>
      <main className='flex flex-col items-center bg-slate-400 text-black box-border lg:w-2/3 lg:mx-auto'>
        <h1 className='mt-16 mb-4 py-2 bg-gradient-to-tr from-zinc-500 via-zinc-900 to-zinc-700 bg-clip-text text-transparent drop-shadow font-extrabold body-font font-black text-xl md:text-2xl lg:text-4xl'>Positive +/- Negative</h1>
        <ExerciseBanner />
        <ExerciseList />
      </main>
    </>
  );
}

export default App;


