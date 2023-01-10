import { FC } from 'react'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import cn from 'classnames'

const SkeletonLoader:FC<SkeletonProps> = ({className, ...res}) => {
  return (
    <Skeleton {...res} baseColor="#1F2125" highlightColor='#292A2E' className={cn('rounded-lg', className)}/>
  )
}

export default SkeletonLoader