import Navigation from './Navigation';

export default function Header(props) {
  return (
    <header className='py-7 px-4'>
      <Navigation data={props.data}/>
    </header>
  );
}
