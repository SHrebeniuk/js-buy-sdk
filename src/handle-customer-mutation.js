export default function handleCustomerMutation(mutationRootKey) {
  return function({data = {}, errors}) {
    try {
      const rootData = data[mutationRootKey];

      if (errors && errors.length) {
        return Promise.reject(errors);
      }

      if (rootData && rootData.customerUserErrors && rootData.customerUserErrors.length) {
        return Promise.reject(rootData.customerUserErrors);
      }

      if (rootData && rootData.userErrors && rootData.userErrors.length) {
        return Promise.reject(rootData.userErrors);
      }

      if (rootData) {
        return rootData;
      }

      return Promise.reject(new Error(`The ${mutationRootKey} mutation failed due to an unknown error.`));
    } catch (_) {
      return Promise.reject(new Error(`The ${mutationRootKey} mutation failed due to an unknown error.`));
    }
  };
}