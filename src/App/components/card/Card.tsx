import React from 'react'
import { Stack, Image, Text, Card as CardChakra, CardBody, Heading } from '@chakra-ui/react'
import { Character } from '@/character/types'

interface Props {
  item: Character
}

const Card: React.FC<Props> = ({item}) => {
  return (
    <CardChakra
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      maxW={{ base: '100%', sm: '280px' }}
       maxH={{ base: '100%', sm: '120px' }}
    >
      <Image
        objectFit='cover'
        boxSize='100px'
        maxW={{ base: '100%', sm: '120px' }}
        src={item.image}
        alt='Caffe Latte'
      />
      <Stack direction="row" alignItems="center">
        <CardBody>
          <Heading size='sm'>{item.name}</Heading>
          <Text py='1'>
            {item.status} -  {item.species}
          </Text>
        </CardBody>
      </Stack>
    </CardChakra>
  )
}

export default Card