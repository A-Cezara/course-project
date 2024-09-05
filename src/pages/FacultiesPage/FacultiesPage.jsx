import React from 'react';
import data from '../../utils/data.json';
import Paper from 'components/Paper';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import { Link } from 'react-router-dom';

export default function FacultiesPage() {
  return (
    <div className="section">
      {data?.faculties?.map(faculty => {
        return (
          <Link key={faculty.id} to={`/faculties/${faculty.name}`}>
            <Paper>
              <InfoBlock info={faculty.name}></InfoBlock>
            </Paper>
          </Link>
        );
      })}
    </div>
  );
}
