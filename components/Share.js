import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  PinterestShareButton,
  PinterestIcon,
} from 'react-share'
import { useState } from 'react'

const Share = () => {
  const [showModal, setShowModal] = useState(false)

  const shareUrl = 'https://books-awards.vercel.app/'
  return (
    <div>
      <button
        type="button"
        className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-pink-500 rounded shadow outline-none hover:shadow-lg focus:outline-none active:bg-pink-600"
        onClick={() => setShowModal(true)}
      >
        Launch demo modal
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto mx-auto my-6 ">
              {/*content*/}
              <div className="relative flex h-[28rem] max-h-[28rem] w-96 flex-col rounded-xl border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <img
                  src="73301242.svg"
                  className="object-cover w-full rounded-t-xl h-2/4 border-slate-200 "
                ></img>

                <div className="relative flex-auto p-6 text-center ">
                  <h3 className="text-3xl font-light ">This app rocks!</h3>

                  <p className="my-4 text-lg font-thin leading-relaxed text-slate-500 ">
                    Tell your friends, family and neighbours. Hell, share it
                    with whole World
                  </p>
                  <div
                    style={{
                      background: '#0000',
                      height: '100vh',
                      width: '100%',
                    }}
                  >
                    <FacebookShareButton url={shareUrl}>
                      <FacebookIcon size={32} round={true} className="m-0.5" />
                    </FacebookShareButton>

                    <WhatsappShareButton url={shareUrl}>
                      <WhatsappIcon size={32} round={true} className="m-0.5" />
                    </WhatsappShareButton>

                    <TwitterShareButton
                      url={shareUrl}
                      title={'Vote in Random books awards'}
                      hashtags={['booktwitter']}
                    >
                      <TwitterIcon size={32} round={true} className="m-0.5" />
                    </TwitterShareButton>

                    <LinkedinShareButton
                      url={shareUrl}
                      title={'Vote in Random books awards'}
                      hashtags={['booktwitter']}
                    >
                      <LinkedinIcon size={32} round={true} className="m-0.5" />
                    </LinkedinShareButton>

                    <PinterestShareButton
                      url={shareUrl}
                      title={'Vote in Random books awards'}
                      hashtags={['booktwitter']}
                      media={
                        'https://stingray-app-ozczk.ondigitalocean.app/assets/596b2be9-bfa3-48e1-b7f7-d2cc79ee2b4d.png'
                      }
                    >
                      <PinterestIcon size={32} round={true} className="m-0.5" />
                    </PinterestShareButton>
                  </div>
                </div>
                {/*footer*/}
                {/* <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200"></div> */}
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
        </>
      ) : null}
    </div>
  )
}

export default Share
