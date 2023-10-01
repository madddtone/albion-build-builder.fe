import Dashboard from "@/components/layout/dashboard"

export default function Skill() {
  return (
    <>  	
			<div>
				teste
			</div>
    </>
  )
}


Skill.getLayout = function getLayout(page) {
	return (
		<Dashboard>{page}</Dashboard>
	)
}
