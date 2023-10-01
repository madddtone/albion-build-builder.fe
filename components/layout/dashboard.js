import SideBar from "./partials/SideBar";

function Dashboard({ children })
{
  return (
    <>
      <main className="grid grid-cols-12 min-h-screen scroll-smooth">
        <SideBar />
        <div className="col-span-12 lg:col-span-11 bg-gray-100">
          { children }
        </div>
      </main>
    </>
  )
}

export default Dashboard;