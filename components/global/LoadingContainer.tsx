import React from 'react'
import { Card, CardContent } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

function LoadingContainer() {
  return (
    <div className="pt-10 border-t grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
    </div>
  );
}

function LoadingProduct(){
  return (
    <Card>
      <CardContent>
        <Skeleton className="h-49 w-full" />
        <Skeleton className="h-4 w-3/4 mt-4" />
        <Skeleton className="h-4 w-1 mt-4" />
      </CardContent>
    </Card>
  );
}

export default LoadingContainer
