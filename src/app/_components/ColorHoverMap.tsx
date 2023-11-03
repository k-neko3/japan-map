export default function ColorHoverMap() {
  return (
    <>
      <div className="flex items-center justify-center pb-[50px] text-[8px] min-[375px]:text-[10px] min-[474px]:text-[12px] sm:text-[14px]">
        <div className="grid grid-cols-14 grid-rows-15 gap-[1px] px-[12px] text-[#ffffff] md:w-[760px]">
          <div className="col-span-2 col-start-13 row-span-2 row-start-1 flex cursor-pointer items-center justify-center bg-[#4e99d0] hover:bg-[#5eb8f8]">
            北海道
          </div>
          <div className="col-span-2 col-start-13 row-start-4 flex cursor-pointer items-center justify-center bg-[#89c9e4] hover:bg-[#72bcdb]">
            青森
          </div>
          <div className="col-start-13 row-start-5 flex cursor-pointer items-center justify-center bg-[#89c9e4] hover:bg-[#72bcdb]">
            秋田
          </div>
          <div className="col-start-14 row-start-5 flex cursor-pointer items-center justify-center bg-[#89c9e4] hover:bg-[#72bcdb]">
            岩手
          </div>
          <div className="col-start-13 row-start-6 flex cursor-pointer items-center justify-center bg-[#89c9e4] hover:bg-[#72bcdb]">
            山形
          </div>
          <div className="col-start-14 row-start-6 flex cursor-pointer items-center justify-center bg-[#89c9e4] hover:bg-[#72bcdb]">
            宮城
          </div>
          <div className="col-span-2 col-start-13 row-start-7 flex cursor-pointer items-center justify-center bg-[#89c9e4] hover:bg-[#72bcdb]">
            福島
          </div>
          <div className="col-span-2 col-start-11 row-start-7 flex cursor-pointer items-center justify-center bg-[#a4be27] hover:bg-[#7cb942]">
            新潟
          </div>
          <div className="col-start-12 row-start-8 flex cursor-pointer items-center justify-center bg-[#41a83d] hover:bg-[#37b937]">
            群馬
          </div>
          <div className="col-start-13 row-start-8 flex cursor-pointer items-center justify-center bg-[#41a83d] hover:bg-[#37b937]">
            栃木
          </div>
          <div className="col-start-14 row-span-2 row-start-8 flex cursor-pointer items-center justify-center bg-[#41a83d] hover:bg-[#37b937]">
            茨城
          </div>
          <div className="col-span-2 col-start-12 row-start-9 flex cursor-pointer items-center justify-center bg-[#41a83d] hover:bg-[#37b937]">
            埼玉
          </div>
          <div className="col-start-13 row-start-10 flex min-h-[calc((100vw-24px)/14)] cursor-pointer items-center justify-center bg-[#41a83d] hover:bg-[#37b937] md:min-h-[calc((760px-24px)/14)]">
            東京
          </div>
          <div className="lg:text-[14px]] col-start-13 row-start-11 flex cursor-pointer items-center justify-center bg-[#41a83d] text-[8px] hover:bg-[#37b937] min-[375px]:text-[10px] sm:text-[13px]">
            <span>神奈</span>
            <span className="hidden min-[474px]:inline">川</span>
          </div>
          <div className="col-start-14 row-span-2 row-start-10 flex cursor-pointer items-center justify-center bg-[#41a83d] hover:bg-[#37b937]">
            千葉
          </div>
          <div className="col-start-12 row-start-10 flex cursor-pointer items-center justify-center bg-[#a4be27] hover:bg-[#7cb942]">
            山梨
          </div>
          <div className="col-start-11 row-span-3 row-start-8 flex cursor-pointer items-center justify-center bg-[#a4be27] hover:bg-[#7cb942]">
            長野
          </div>
          <div className="col-span-2 col-start-11 row-start-11 flex cursor-pointer items-center justify-center bg-[#a4be27] hover:bg-[#7cb942]">
            静岡
          </div>
          <div className="col-start-10 row-start-11 flex cursor-pointer items-center justify-center bg-[#a4be27] hover:bg-[#7cb942]">
            愛知
          </div>
          <div className="col-start-10 row-span-2 row-start-9 flex cursor-pointer items-center justify-center bg-[#a4be27] hover:bg-[#7cb942]">
            岐阜
          </div>
          <div className="col-start-9 row-span-2 row-start-11 flex cursor-pointer items-center justify-center bg-[#a4be27] hover:bg-[#7cb942]">
            三重
          </div>
          <div className="col-start-10 row-start-8 flex cursor-pointer items-center justify-center bg-[#a4be27] hover:bg-[#7cb942]">
            富山
          </div>
          <div className="col-start-9 row-start-7 flex cursor-pointer items-center justify-center bg-[#a4be27] hover:bg-[#7cb942]">
            石川
          </div>
          <div className="col-start-9 row-start-8 flex cursor-pointer items-center justify-center bg-[#a4be27] hover:bg-[#7cb942]">
            福井
          </div>
          <div className="col-start-9 row-span-2 row-start-9 flex cursor-pointer items-center justify-center bg-[#f5ad4b] hover:bg-[#ffa600]">
            滋賀
          </div>
          <div className="col-start-8 row-start-11 flex cursor-pointer items-center justify-center bg-[#f5ad4b] hover:bg-[#ffa600]">
            奈良
          </div>
          <div className="col-start-8 row-start-12 flex items-center justify-center bg-[#f5ad4b] text-[8px] hover:bg-[#ffa600] min-[375px]:text-[10px] sm:text-[13px] lg:text-[14px]">
            <span>和歌</span>
            <span className="hidden cursor-pointer min-[474px]:inline">山</span>
          </div>
          <div className="col-start-8 row-span-2 row-start-9 flex cursor-pointer items-center justify-center bg-[#f5ad4b] hover:bg-[#ffa600]">
            京都
          </div>
          <div className="col-start-7 row-start-11 flex cursor-pointer items-center justify-center bg-[#f5ad4b] hover:bg-[#ffa600]">
            大阪
          </div>
          <div className="col-start-7 row-span-2 row-start-9 flex cursor-pointer items-center justify-center bg-[#f5ad4b] hover:bg-[#ffa600]">
            兵庫
          </div>
          <div className="col-start-6 row-start-9 flex cursor-pointer items-center justify-center bg-[#f58f4b] hover:bg-[#ee7423]">
            鳥取
          </div>
          <div className="col-start-5 row-start-9 flex cursor-pointer items-center justify-center bg-[#f58f4b] hover:bg-[#ee7423]">
            島根
          </div>
          <div className="col-start-6 row-start-10 flex cursor-pointer items-center justify-center bg-[#f58f4b] hover:bg-[#ee7423]">
            岡山
          </div>
          <div className="col-start-5 row-start-10 flex cursor-pointer items-center justify-center bg-[#f58f4b] hover:bg-[#ee7423]">
            広島
          </div>
          <div className="col-start-4 row-start-9 flex cursor-pointer items-center justify-center bg-[#f58f4b] hover:bg-[#ee7423]">
            山口
          </div>
          <div className="col-start-6 row-start-12 flex cursor-pointer items-center justify-center bg-[#db8b93] hover:bg-[#dd7a84]">
            香川
          </div>
          <div className="col-start-6 row-start-13 flex cursor-pointer items-center justify-center bg-[#db8b93] hover:bg-[#dd7a84]">
            徳島
          </div>
          <div className="col-start-5 row-start-12 flex cursor-pointer items-center justify-center bg-[#db8b93] hover:bg-[#dd7a84]">
            愛媛
          </div>
          <div className="col-start-5 row-start-13 flex cursor-pointer items-center justify-center bg-[#db8b93] hover:bg-[#dd7a84]">
            高知
          </div>
          <div className="col-start-3 row-start-10 flex cursor-pointer items-center justify-center bg-[#ee817c] hover:bg-[#e96861]">
            福岡
          </div>
          <div className="col-start-2 row-start-10 flex cursor-pointer items-center justify-center bg-[#ee817c] hover:bg-[#e96861]">
            佐賀
          </div>
          <div className="col-start-1 row-start-10 flex cursor-pointer items-center justify-center bg-[#ee817c] hover:bg-[#e96861]">
            長崎
          </div>
          <div className="col-start-3 row-start-11 flex cursor-pointer items-center justify-center bg-[#ee817c] hover:bg-[#e96861]">
            大分
          </div>
          <div className="col-start-3 row-start-12 flex cursor-pointer items-center justify-center bg-[#ee817c] hover:bg-[#e96861]">
            宮崎
          </div>
          <div className="col-start-2 row-span-2 row-start-11 flex cursor-pointer items-center justify-center bg-[#ee817c] hover:bg-[#e96861]">
            熊本
          </div>
          <div className="col-span-2 col-start-2 row-start-13 flex cursor-pointer items-center justify-center bg-[#ee817c] hover:bg-[#e96861]">
            鹿児島
          </div>
          <div className="col-start-2 row-start-15 flex cursor-pointer items-center justify-center bg-[#ee817c] hover:bg-[#e96861]">
            沖縄
          </div>
        </div>
      </div>
    </>
  );
}
