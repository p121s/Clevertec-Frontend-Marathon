import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { AllBooks } from './components/all-books';
import { AuthRegistrationUser } from './pages/auth-registr-user';
import { BookPage } from './pages/book';
import { ContractOffer } from './pages/contract-offer';
import { Layout } from './pages/layout';
import { MainPage } from './pages/main';
import { TermsOfUse } from './pages/terms-of-use';
import { ContainerFroToasts } from './shared/toasts/toasts-container';
import { store } from './store/store';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path=':useractions' element={<AuthRegistrationUser />} />
          <Route path='' element={<MainPage />}>
            <Route path='books/:category' element={<AllBooks />} />
            <Route path='Terms of use' element={<TermsOfUse />} />
            <Route path='Contract offer' element={<ContractOffer />} />
          </Route>
          <Route path='books/:category/:id' element={<BookPage />} />
          <Route path='profile' element={<h1>Профиль</h1>} />
          <Route path='quit' element={<h1>Выход</h1>} />
          <Route path='*' element={<span>Error</span>} />
        </Route>
      </Routes>
    </HashRouter>
    <ContainerFroToasts />
  </Provider>
);
