import { Component,createSignal, For, } from 'solid-js';

import styles from './App.module.css';

const App: Component = () => {

  const [isOpen, setIsOpen] = createSignal(false);
  const [data, setData] = createSignal(['Dashboard', 'About', 'Profile']);
  function toggleOpen (){
    setIsOpen(curr => !curr);
  }  

  
  return (
    <div class={styles.App}>
      <div class={styles.container}>
        <div
          onClick={()=> toggleOpen()} 
          class={`${styles.btn} ${isOpen() ? styles.open : null}`}>
          Continue
        </div>
          <ul class={styles.wrapper}>
            <For 
            each={data()}>{(item, i) =>
              <li
                onClick={()=> toggleOpen()} 
                class={styles.btn}>
                <a href="#">{item}</a>
              </li>
            }
            </For>
          </ul>
      </div>
    </div>
  );
};

export default App;
