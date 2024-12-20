import GroupMember from "@/components/group/GroupMember"
import { IconButton } from "@/components/group/IconButton"
import { RiAddFill } from "react-icons/ri"

function PlanTripGroup() {

  const handleInviteToGroup = () => (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		// invitar al grupo
		console.log(`Invitar al grupo`)
	}

  const members = [
    {name: "Ana Gallinado", info: 'Alumna 6to B'},
    {name: "Juan Pérez", info: 'Alumno 6to A'},
    {name: "Lucía Fernández", info: 'Alumna 6to B'},
  ]

  return (
    <div className="flex-col mt-3 mx-3">
      <section>
        <div className="flex">
            <div className='col ml-2'>
              <p className="font-black "> Grupo Colegio</p>{/* {user.name} */}
              <p className="leading-none">Viajan a Mar del Plata</p>{/* {user.rol} */}
            </div>
        </div>
        <IconButton
          icon={RiAddFill}
          label='Invitar gente'
          className='bg-gray-300 mt-3'
          onClick={handleInviteToGroup}
        />
      </section>
      <section className="mt-3">
        <h1 className="mb-3 text-lg font-black text-gray-700"> Integrantes del grupo</h1>
        {members.map((member, index)=> (
              <GroupMember key={index} name={member.name} info={member.info}/>
            ))}
      </section>

    </div>
  )
}

export default PlanTripGroup