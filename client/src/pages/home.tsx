import React from 'react';
import { useList } from '@pankod/refine-core';
import { Box, Typography, Stack } from '@pankod/refine-mui';

import {
  PieChart,
  PropertyCard,
  TotalRevenue,
  PropertyReferrals,
  TopAgent,
} from 'components';

const Home = () => {
  const { data, isLoading, isError } = useList({
    resource: 'properties',
    config: {
      pagination: {
        pageSize: 5,
      },
    },
  });
  const latestProperties = data?.data ?? [];
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        Dashboard
      </Typography>
      <Box marginTop="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Properties for sale"
          value={684}
          series={[75, 25]}
          colors={['#475be8', '#e4e8ef']}
        />
        <PieChart
          title="Properties for rent"
          value={544}
          series={[60, 40]}
          colors={['#47aae8', '#e4e0bf']}
        />
        <PieChart
          title="Total Customers"
          value={3684}
          series={[55, 45]}
          colors={['#a15be8', '#ecc8ef']}
        />
        <PieChart
          title="Total Cities"
          value={324}
          series={[75, 25]}
          colors={['#475be8', '#e4e8ef']}
        />
      </Box>
      <Stack
        mt="25px"
        width="100%"
        direction={{ xs: 'column', lg: 'row' }}
        gap={4}
      >
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>
      <Box
        flex={1}
        borderRadius={'15px'}
        padding={'20px'}
        bgcolor={'#fcfcfc'}
        display={'flex'}
        flexDirection={'column'}
        minWidth={'100%'}
        mt={'25px'}
      >
        <Typography fontSize={'18px'} color={'#11142d'} fontWeight={600}>
          Latest Properties
        </Typography>
        <Box mt={2.5} sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {latestProperties.map((property) => (
            <PropertyCard
              key={property._id}
              id={property._id}
              price={property.price}
              photo={property.photo}
              location={property.location}
              title={property.title}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
