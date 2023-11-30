import Header from "./components/Header";
import MainView from "./components/MainView";
import {QueryClient, QueryClientProvider} from "react-query";
import {MainPaper} from "./styled";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainPaper>
        <Header/>
        <MainView/>
      </MainPaper>
    </QueryClientProvider>
  )
}

export default App
