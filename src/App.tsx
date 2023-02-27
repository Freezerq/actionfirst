import React, {useEffect, useState} from 'react';
import {createClient} from "@supabase/supabase-js";
import Sphere from "./components/Sphere";
export const supabase = createClient('https://jbwhgkteptrecbuviouc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impid2hna3RlcHRyZWNidXZpb3VjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcyNDA4NDksImV4cCI6MTk5MjgxNjg0OX0.xsHU5yd8Z-l5WbusZM0oyXnL5rBQOyrrPtZSosDsRhA')




function App() {



    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        supabase.auth.getUser().then(r => {
            if (r.data.user?.aud === "authenticated") {
                setIsLoggedIn(true)
            }
        })
    }, [])


  return (
    <div className="App">
      <div>
          <Sphere/>
        {/*<SingUp/>*/}
        {/*{isLoggedIn ? <Goals/> : <SignIn/>}*/}
      </div>
    </div>
  );
}



export default App;
