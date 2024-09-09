import CategoryByEvents from '@/components/CategoryByEvents/CategoryByEvents';
import React from 'react';

const page = async ({params}) => {

    return (
        <CategoryByEvents category={params.category} />
    );
};

export default page;