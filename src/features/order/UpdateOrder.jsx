import React from 'react';
import Button from '../../ui/Button';
import { useFetcher } from 'react-router-dom';
import { updateOrder } from '../../services/apiRestaurant';

const UpdateOrder = ({ order }) => {
  const fetcher = useFetcher();
    const isloadingFetcherData = fetcher.state === 'loading'

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary" disabled={isloadingFetcherData}>Make Priority</Button>
    </fetcher.Form>
  );
};

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);

  return null;
}

export default UpdateOrder;
