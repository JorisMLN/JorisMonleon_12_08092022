import { userId } from '../mock/dataMocked';

export const getUser = async () => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  };

  try {
    const response = await fetch(`http://localhost:3000/user/${userId}`, requestOptions);
    const jsonRes = await response.json();
    return jsonRes.data;

  } catch {
    console.error();
    return [];
  }
};

export const getActivity = async () => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  };

  try {
    const response = await fetch(`http://localhost:3000/user/${userId}/activity`, requestOptions);
    const jsonRes = await response.json();
    return jsonRes.data.sessions

  } catch {
    console.error();
    return [];
  }
};

export const getAverage = async () => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  };

  try {
    const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`, requestOptions);
    const jsonRes = await response.json();
    return jsonRes.data.sessions;

  } catch {
    console.error();
    return [];
  }
};

export const getPerformance = async () => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  };

  try {
    const response = await fetch(`http://localhost:3000/user/${userId}/performance`, requestOptions);
    const jsonRes = await response.json();
    return { value: jsonRes.data.data, kind: jsonRes.data.kind }

  } catch {
    console.error();
    return [];
  }
}
