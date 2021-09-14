import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  Box,
  Breadcrumbs as MuiBreadcrumbs,
  Button as MuiButton,
  Card as MuiCard,
  CardContent,
  CardHeader,
  Divider as MuiDivider,
  Grid,
  Link,
  Typography as MuiTypography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

import useAppSelector from "../../hooks/useAppSelector";
import useAppDispatch from "../../hooks/useAppDispatch";

import Code from "../../components/Code";

import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "../../redux/slices/counter";

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Typography = styled(MuiTypography)(spacing);

const Button = styled(MuiButton)(spacing);

const Card = styled(MuiCard)(spacing);

const CounterElement = styled.span`
  font-size: 16px;
  margin-left: ${(props) => props.theme.spacing(2)};
  margin-right: ${(props) => props.theme.spacing(2)};
`;

function Introduction() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        Introduction
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        Redux helps you write applications that behave consistently, run in
        different environments (client, server, and native), and are easy to
        test. Material App leverages{" "}
        <Link
          href="https://redux-toolkit.js.org/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Redux Toolkit
        </Link>
        , to keep the amount of boilerplate code and complexity to a minimum.
      </Typography>
    </Box>
  );
}

function Usage() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        Usage
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        Material App contains the following folders/files to store any Redux
        related logic:
        <ul>
          <li>
            <code>src/redux/store.js</code> where reducers are combined and the
            store is initialized
          </li>
          <li>
            <code>src/redux/slices/</code> where reducers are implemented
          </li>
        </ul>
      </Typography>
    </Box>
  );
}

function CreatingANewSlice() {
  return (
    <Box mb={10}>
      <Typography variant="h4" gutterBottom>
        1. Creating a new slice
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        If you want to create a new slice, pleae add a file to the{" "}
        <code>/src/redux/slices/</code> folder. Quick example:
        <Code>{`import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: []
};

const slice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, payload) {
      state.products = [
        {
          id: '1',
          slug: 'my-first-product',
          title: 'My first product'
        }
      ];
    }
  }
});

export const { reducer } = slice;

export default slice;

export function getProducts() {
  return async dispatch => {
    const response = await axios.get('/api/products');
    dispatch(slice.actions.setProducts(response.data.products));
  };
}`}</Code>
      </Typography>
    </Box>
  );
}

function AddSliceToRootReducer() {
  return (
    <Box mb={10}>
      <Typography variant="h4" gutterBottom>
        2. Add slice to root reducer
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        Open the <code>/src/redux/store.ts</code> file and add the new slice:
        <Code>{`import productsReducer from "./slices/products";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});`}</Code>
      </Typography>
    </Box>
  );
}

function UsingTheSlice() {
  return (
    <Box mb={10}>
      <Typography variant="h4" gutterBottom>
        3. Using the slice
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        <Code>{`import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/slices/products';

function ProductList() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <div>{product.name}</div>
        </div>
      ))}
    </div>
  );
}`}</Code>
      </Typography>
    </Box>
  );
}

function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <Card>
      <CardHeader title="Example" />
      <CardContent>
        <Box my={3}>
          <Button
            variant="outlined"
            size="small"
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            -
          </Button>
          <CounterElement>{count}</CounterElement>
          <Button
            variant="outlined"
            size="small"
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            +
          </Button>
        </Box>
        <Box my={3}>
          <Button
            variant="outlined"
            size="small"
            onClick={() => dispatch(incrementByAmount(1))}
            mr={2}
          >
            Add Amount
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={() => dispatch(incrementAsync(1))}
            mr={2}
          >
            Add Async
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={() => dispatch(incrementIfOdd(1))}
            mr={2}
          >
            Add If Odd
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

function RealLifeExample() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        Real-life example
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        The example below includes various methods, including{" "}
        <code>createSlice</code> and <code>createAsyncThunk</code>. Any time you
        click the "Increment" and "Decrement buttons in the example below, the
        following happens:
        <ul>
          <li>
            The corresponding Redux action will be dispatched to the store
          </li>
          <li>
            The counter slice reducer will see the actions and update its state
          </li>
          <li>
            The <code>{`<Counter>`}</code> component will see the new state
            value from the store and re-render itself with the new data
          </li>
        </ul>
      </Typography>
      <Counter />
    </Box>
  );
}

function ReduxDevTools() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        Redux DevTools
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        Redux DevTools offers developer tools to power-up Redux development
        workflow or any other architecture which handles the state change (see
        integrations).
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        It can be used as a browser extension (for{" "}
        <Link
          href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd"
          target="_blank"
          rel="nofollow noreferrer"
        >
          Chrome
        </Link>
        ,{" "}
        <Link
          href="https://microsoftedge.microsoft.com/addons/detail/redux-devtools/nnkgneoiohoecpdiaponcejilbhhikei"
          target="_blank"
          rel="nofollow noreferrer"
        >
          Edge
        </Link>{" "}
        and{" "}
        <Link
          href="https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/"
          target="_blank"
          rel="nofollow noreferrer"
        >
          Firefox
        </Link>
        ), as{" "}
        <Link
          href="https://github.com/zalmoxisus/remotedev-app"
          target="_blank"
          rel="nofollow noreferrer"
        >
          a standalone app
        </Link>{" "}
        or as{" "}
        <Link
          href="https://github.com/reduxjs/redux-devtools/tree/master/packages/redux-devtools"
          target="_blank"
          rel="nofollow noreferrer"
        >
          a React component
        </Link>{" "}
        integrated in the client app.
      </Typography>
    </Box>
  );
}

function Redux() {
  return (
    <React.Fragment>
      <Helmet title="Redux" />

      <Grid container spacing={6} justifyContent="center">
        <Grid item xs={12} lg={9} xl={7}>
          <Typography variant="h2" gutterBottom display="inline">
            Redux
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} to="/">
              Dashboard
            </Link>
            <Link component={NavLink} to="/documentation/welcome">
              Documentation
            </Link>
            <Typography>Redux</Typography>
          </Breadcrumbs>

          <Divider my={6} />

          <Introduction />
          <Usage />
          <CreatingANewSlice />
          <AddSliceToRootReducer />
          <UsingTheSlice />
          <RealLifeExample />
          <ReduxDevTools />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Redux;
