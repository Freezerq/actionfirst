import React, {useEffect, useState} from 'react';
import {createClient} from "@supabase/supabase-js";
import Sphere from "./components/Sphere";
import {Database} from "./supabaseTypes";

export const supabase = createClient<Database>('https://jbwhgkteptrecbuviouc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impid2hna3RlcHRyZWNidXZpb3VjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcyNDA4NDksImV4cCI6MTk5MjgxNjg0OX0.xsHU5yd8Z-l5WbusZM0oyXnL5rBQOyrrPtZSosDsRhA')



// export const userId = supabase.auth.getUser().then(r => {
//     if (r.data.user?.aud === "authenticated") {
//         return r.data.user?.aud
//     }
// })

export const userId = '5619f0e3-9a89-4dcd-b3c0-db9da839db1d'

function App() {



    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {

    }, [])


  return (
    <div className="App">
      <div>
          <Sphere/>
        {/*<SingUp/>*/}
        {/*{isLoggedIn ? <MainGoal/> : <SignIn/>}*/}
      </div>
    </div>
  );
}



export default App;
