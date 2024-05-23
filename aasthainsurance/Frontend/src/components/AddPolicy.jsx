import { Button } from "flowbite-react"
import { Link } from "react-router-dom"
function AddPolicy() {
  return (
    <>
    <div>Choose Type of Policy To Add</div>
    <div>
      <Link to='/lifeForm'>
      <Button>
        Life Insurance
      </Button>
      </Link>
      <Link to='/healthForm'>
      <Button>
        Health Insurance
      </Button>
      </Link>
      <Link to='/homeForm'>
      <Button>
        Home Insurance
      </Button>
      </Link>
    </div>
    </>
  )
}

export default AddPolicy