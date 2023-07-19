import { Box } from "@mui/material"
import ResponsiveDrawer from "../components/ResponsiveDrawer"
import {Outlet} from 'react-router-dom'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <>
    <ResponsiveDrawer/>
    </>
  )
}

export default Dashboard