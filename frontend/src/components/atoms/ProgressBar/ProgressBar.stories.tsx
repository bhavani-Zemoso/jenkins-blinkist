
import { LinearProgress } from '@mui/material'
import { ProgressBar } from './ProgressBar'

export default {
    title: 'Atoms/ProgressBar',
    component: LinearProgress
}

export const NoProgress = () => <ProgressBar value={0}/>
export const HalfProgress = () => <ProgressBar value={50}/>
export const FullProgress = () => <ProgressBar value={100}/>