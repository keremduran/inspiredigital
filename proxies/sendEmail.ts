export const sendEmail = (data: any) => {
  return fetch('/api/contact', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.status === 200);
};
