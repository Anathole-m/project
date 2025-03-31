function Home(){
    return(
      <><div className="w-screen">
      <div className="flex justify-center items-center h-screen gap-48">
        <div className="fb_text">
          <h1 className="text-blue-400 font-semibold text-7xl p-2">facebook</h1>
          <p className="text-black text-2xl w-80">Connect with friends and the world around you on Facebook</p>
        </div>
        <div className="form">
        <div className="fb_form p-5 shadow-2xl shadow-gray-500 w-96 rounded-3xl bg-gray-50 pt-10">
          <input className="w-full block border-gray-300 border-1 text-black outline-blue-300 p-3 rounded-xl" type="email" placeholder="enter email or phone number" /><br />
          <input className="w-full block  border-gray-300 border-1 text-black outline-blue-300 p-3 rounded-xl" type="password" placeholder="Password"/><br />
          <input className="w-full block outline-blue-300 p-3 rounded-xl bg-blue-500 text-white" type="button" value="Login" /><br />
          <center><a href="" className="text-blue-400 rounded">Forgot password?</a></center><br />
          <center><button className="bg-green-400 p-2 rounded-xl text-white">Create new account</button></center>
        </div>
        <div className="form_text pt-5">
          <p className="text-gray-500">Create a page for a celebrity, brand or business.</p>
        </div>
        </div>
      </div>

    </div>
      </>
    )
}
export default Home;