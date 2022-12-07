import React, { useCallback } from 'react';
import { useSelector, useDispatch } from '../../services/hooks';
import { AppHeader } from '../app-header/app-header';
import { Modal } from '../modal/modal';
import { IngredientDetails } from '../ingredient-details/ingredient-details';
import { getBurgerIngredients } from '../../services/actions/burger-ingredients';
import { deleteIgredientDetails } from '../../services/actions/ingredient-details';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import { Registration } from '../../pages/registration';
import { Authorization } from '../../pages/authorization';
import { ForgotPassword } from '../../pages/forgot-password';
import { ResetPassword } from '../../pages/reset-password';
import { Profile } from '../../pages/profile';
import { Main } from '../../pages/main';
import { IngredientInfo } from '../../pages/ingredient-info';
import { ProtectedRoute } from '../protected-route/protected-route';
import { Feed } from '../../pages/feed';
import { TLocation } from '../../services/types/types';
import { Order } from '../order/order';
import { OrderInfo } from '../../pages/order-info';
import { ProfileOrderInfo } from '../../pages/profile-order-info';

export function App() {

  const dispatch = useDispatch();
  const location = useLocation<TLocation>();
  const history = useHistory();
  const background = location.state && location.state.background;

  React.useEffect(() => {
    dispatch(getBurgerIngredients())
  }, [dispatch])


  // const openIngredientDetailsModal = useSelector(state => !!state.ingredientDetails.ingredientDetails);
  // const closeIngredientModal = useCallback(() => {
  //   // dispatch(deleteIgredientDetails())
  //   history.push('/')
  //   // history.push({
  //   //   ...location.state.background,
  //   //   state: { background: null },
  //   // });
  // }, [])


  return (
    <>
      <AppHeader />

      <Switch location={background || location}>
        <Route exact path="/" component={Main} />
        <Route exact path="/ingredients/:id" component={IngredientInfo} />
        <Route exact path="/register" component={Registration} />
        <Route exact path="/login" component={Authorization} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/reset-password" component={ResetPassword} />
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/feed/:id" component={OrderInfo} />
        <ProtectedRoute path="/profile" component={Profile} />
        <ProtectedRoute path="/profile/orders" component={Profile} />
        <ProtectedRoute path="/profile/orders/:id" component={ProfileOrderInfo} />
      </Switch>

      {background && (
        <>
          <Route path="/ingredients/:id" >
            <Modal>
              <IngredientDetails />
            </Modal>
          </Route>
          <Route path="/feed/:id">
            <Modal>
              <Order />
            </Modal>
          </Route>
          {/* <Route exact path="/profile/orders/:id">
            <Modal onClose={closeModal}>
              <Order />
            </Modal>
          </Route> */}
        </>
      )}
    </>
  )
}

// 
