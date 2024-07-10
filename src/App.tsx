import { animated, useTransition } from '@react-spring/web';
import SplashScreen from './screens/splash_screen/splash_screen'
import { useSplash } from './utils/hooks/useSplash';
import CardsScreen from './screens/cards_screen/cards_screen';

function App() {
  const isAppInited = useSplash();
  const transition = useTransition(!isAppInited, {
    from: {opacity: 1},
    leave: {opacity: 0},
    config: {duration: 70},
  })

  return (
    <>
      {transition((style, item)=> {
        return item
        ? <animated.div style={style}><SplashScreen /></animated.div>
        : <CardsScreen/>
      })
      }
    </>
  )
}

export default App
