import Dashboard from '@/components/layout/dashboard';
import { Table } from 'flowbite-react';
import { Card } from 'flowbite-react';
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import ItemCard from '@/components/layout/card/ItemCard'

function Skill() {
  
 return (
    <>
      <div className='flex scroll-sm'>
        <Card	className="w-6/12 bg-gray-100 mx-5 my-5" href="#">
          test
        </Card>

        <ItemCard>

        </ItemCard>
      </div>
    </>
  );
}

Skill.getLayout = function getLayout(page) {
  return <Dashboard>{page}</Dashboard>;
};

export default Skill;
