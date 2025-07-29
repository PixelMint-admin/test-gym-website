import React from 'react';

const RoomDetailsPage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1>Room Details</h1>
      <p>Details for room {params.id}</p>
    </div>
  );
};

export default RoomDetailsPage;
