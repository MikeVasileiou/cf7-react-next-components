// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
import Layout from "./components/Layout.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
import Counter from "./components/Counter.tsx";
// import CodingFactoryLogo from "./components/CodingFactoryLogo.tsx";

function App() {


  return (
    <>
      <Layout>
        {/*<ClassComponent/>*/}
        {/*<FunctionalComponent/>*/}
        {/*<ArrowFunctionalComponent/>*/}
        {/*<ArrowFunctionalComponentWithProps title="Is an Arrow Functional Component with Props!" />*/}
        {/*<ArrowFunctionalComponentWithPropsType*/}
        {/*    title="Is an Arrow Functional Component with Pros"*/}
        {/*    description="Functional Component with Props type " />*/}

  {/*<h1 className="text-center text-2xl font-bold">This is heading 1 title</h1>*/}
  {/*<FunctionalComponent/>*/}
  {/*    <ClassComponentWithState/>*/}
  {/*      <FunctionalComponentWithState/>*/}
        <Counter/>
      </Layout>
  </>
  )
}

export default App
