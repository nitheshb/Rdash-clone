import clsx from 'clsx'
import React from 'react'

type Props = { selected: boolean }

const Setting = ({ selected }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 18.829 18.648"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        data-name="Path 15115"
        d="M10.728 18.648a.365.365 0 0 1-.349-.259l-.389-1.132a.366.366 0 0 0-.345-.245h-.461a.362.362 0 0 0-.343.245l-.389 1.132a.365.365 0 0 1-.349.259.368.368 0 0 1-.063-.005l-.525-.091a.366.366 0 0 1-.3-.381l.018-1.2a.362.362 0 0 0-.249-.349 6.14 6.14 0 0 1-.448-.163.265.265 0 0 0-.1-.019.356.356 0 0 0-.271.137l-.76.934a.362.362 0 0 1-.47.1l-.462-.268a.362.362 0 0 1-.149-.458l.426-1.12a.362.362 0 0 0-.113-.412 9.396 9.396 0 0 1-.335-.282.362.362 0 0 0-.425-.041l-1.027.617a.357.357 0 0 1-.475-.068l-.339-.407a.362.362 0 0 1 .014-.481l.783-.9a.369.369 0 0 0 .032-.431 6.979 6.979 0 0 1-.217-.381.362.362 0 0 0-.389-.186l-1.172.226a.359.359 0 0 1-.425-.226l-.181-.5a.365.365 0 0 1 .177-.449l1.042-.58a.365.365 0 0 0 .177-.39c-.032-.14-.054-.287-.077-.429a.362.362 0 0 0-.3-.309L.322 9.945A.356.356 0 0 1 0 9.586v-.53A.366.366 0 0 1 .322 8.7L1.5 8.507a.365.365 0 0 0 .3-.307c.02-.126.042-.246.066-.374v-.009l.009-.048a.359.359 0 0 0-.177-.39L.658 6.8a.365.365 0 0 1-.177-.449l.181-.5a.362.362 0 0 1 .425-.226l1.172.226a.367.367 0 0 0 .389-.186c.068-.132.141-.26.217-.381a.362.362 0 0 0-.032-.431l-.783-.9a.362.362 0 0 1-.014-.481l.339-.407a.362.362 0 0 1 .475-.068l1.012.626a.362.362 0 0 0 .425-.041 9.5 9.5 0 0 1 .335-.282.364.364 0 0 0 .113-.412l-.425-1.12a.359.359 0 0 1 .149-.457l.462-.267a.362.362 0 0 1-.472-.1l-.77-.948a.3.3 0 0 0-.24-.122.379.379 0 0 0-.136.027l-.027.011h-.005c-.108.041-.229.088-.4.146a.362.362 0 0 0-.249.349l.018 1.2a.366.366 0 0 1-.3.381l-.525.091a.37.37 0 0 1-.065.011zM8.783 11.88l-1.538 2.677a.724.724 0 0 0 .442 1.061 6.652 6.652 0 0 0 1.712.224h.021a6.508 6.508 0 0 0 6.306-4.891.724.724 0 0 0-.7-.9h-3.09a2.645 2.645 0 0 1-2.541 1.9 2.664 2.664 0 0 1-.61-.071zm-3.4-7.446a.724.724 0 0 0-.509.21 6.525 6.525 0 0 0-.02 9.34.724.724 0 0 0 .607.205.724.724 0 0 0 .532-.357l1.526-2.658a2.652 2.652 0 0 1-.567-.841 2.645 2.645 0 0 1 .239-2.5 2.666 2.666 0 0 1 .32-.391L6.012 4.8a.724.724 0 0 0-.63-.367zM9.393 8.1a1.2 1.2 0 1 0 .467.1 1.192 1.192 0 0 0-.467-.1zm0-1.448A2.65 2.65 0 0 1 11.947 8.6h3.075a.724.724 0 0 0 .7-.9 6.507 6.507 0 0 0-6.304-4.894H9.4a6.655 6.655 0 0 0-1.688.218.724.724 0 0 0-.442 1.059l1.5 2.645a2.661 2.661 0 0 1 .623-.074z"
        className={clsx(
          'fill-black',  // Directly set the fill color to black
          { 'fill-black': selected }  // Optional, but redundant since fill is already black
        )}
      />
    </svg>
  )
}

export default Setting
