import React from 'react'
import './UmrahPrograms.css'
import { useParams } from 'react-router-dom';
import UmrahProgramsData from '../../Data/UmrahProgramsData';

const UmrahPrograms = () => {

  const { id } = useParams();
  const program = UmrahProgramsData.find((program) => program.id === parseInt(id));

  if (!program) {
    return <div>برنامج غير موجود</div>
  }

  return (
    <div className='umrah-programs'>
      <h1>{program.id}</h1>
     
    </div>
  )
}

export default UmrahPrograms