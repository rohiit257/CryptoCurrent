import React from "react";


function Coinlist({ topCoins, globalStats }) {

  const refresdata=()=>{
    window.location.reload()
  }

  



  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4 my-5 ">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 rounded-md  border border-zinc-800 m-5 p-5 ">
          <div className="md:w-1/2">
            <h2 className="text-xl text-zinc-400 font-semibold">Market Overview</h2>
            {globalStats && (
              <p className="mt-1 text-lg text-zinc-400 font-normal">
                Total Coins - {globalStats.totalCoins}
                <br />
                Total Markets - {globalStats.totalMarkets}
                <br />
                Total Exchange - {globalStats.totalExchanges}
                <br />
                Total Market Capital - ${Number(globalStats.totalMarketCap).toLocaleString()}
                <br />
                Total 24 Volume - ${Number(globalStats.total24hVolume).toLocaleString()}
              </p>
            )}
            
          </div>
          <div className="text-zinc-400">
            
            
          </div>

          <div className="md:w-1/2 md:text-right  ">
            
            <button
            onClick={refresdata}
              type="button"
              className="rounded-md bg-stone-200 px-3 py-2 text-sm font-semibold text-zinc-800 shadow-sm hover:bg-zinc-200/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black "
            >
              Refresh Data
            </button>
            {" "}
            
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className=" border border-zinc-800 md:rounded-lg">
                <table className=" divide-y w-full divide-zinc-800">
                  <thead className="bg-zinc-900 ">
                    <tr className="">
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm  font-normal text-zinc-400"
                      >
                        <span>Coin</span>
                      </th>
                      <th
                        scope="col"
                        className="px-6 md:px-12 py-3.5 text-left text-sm font-normal text-zinc-400"
                      >
                        Current Price
                      </th>

                      <th
                        scope="col"
                        className="px-4 md:px-6 py-3.5 text-left text-sm font-normal text-zinc-400"
                      >
                        Price Change
                      </th>

                      <th
                        scope="col"
                        className="px-4 md:px-12 py-3.5 text-left text-sm font-normal text-zinc-400"
                      >
                        Market Cap
                      </th>
                      <th scope="col" className="relative px-4 py-3.5 ">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800 bg-zinc-900">
                    {topCoins.map((data, index) => (
                      <tr key={data.id}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={data.iconUrl}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-zinc-400">
                                {data.name}
                              </div>
                              <div className="text-sm text-stone-200">
                                {data.symbol}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 md:px-12 py-4">
                          <div className="text-sm text-zinc-400 ">
                            ${Number(data.price).toFixed(2)}
                          </div>
                          <div className="text-sm text-zinc-400"></div>
                        </td>
                        <td className="whitespace-nowrap px-4 md:px-6 py-4">
                          <span
                            className={`inline-flex rounded-full ${
                              data.change < 0 ? "bg-red-100" : "bg-green-100"
                            } px-2 text-xs font-semibold leading-5 ${
                              data.change < 0
                                ? "text-red-800"
                                : "text-green-800"
                            }`}
                          >
                            {Number(data.change).toFixed(2)}%
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 md:px-12 py-4 text-sm text-zinc-400">
                          ${Number(data.marketCap).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
}

export default Coinlist;
