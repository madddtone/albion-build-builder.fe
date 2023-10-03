import SideBar from "./partials/SideBar";

function Dashboard({ children })
{
  return (
    <>
      <main className="flex min-h-screen scroll-sm">
        <div className="w-2/12 ">
          <SideBar />
        </div>
        <div className="w-10/12 bg-gray-200">
          {children}
        </div>
      </main>
    </>
  )
}

export default Dashboard;