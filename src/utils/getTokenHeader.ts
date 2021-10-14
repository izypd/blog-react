import getToken from './getToken';

export default function getTokenHeader() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  };
}
