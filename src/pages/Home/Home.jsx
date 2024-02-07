import React from 'react';
import {TodoForm} from '@components/TodoForm';
import { Header } from '@components/Header';
import {Todos} from '@components/Todos';

export default function Home() {
  return (
  <>
  <Header/>
  <TodoForm/>
  <Todos/>
  </>
  )
}
