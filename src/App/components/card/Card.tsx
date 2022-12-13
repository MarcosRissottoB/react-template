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
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '150px' }}
        src={item.image}
        alt='Caffe Latte'
      />
      <Stack direction="row" alignItems="center">
        <CardBody>
          <Heading size='md'>{item.name}</Heading>
          <Text py='2'>
            {item.status} -  {item.species}
          </Text>
        </CardBody>
      </Stack>
    </CardChakra>
  )
}

export default Card