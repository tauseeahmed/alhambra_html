<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
    <head>
        @yield('title')
        @include('user.layout.header')

    </head>
    <body>
        <div id="alert-container"></div>

        <?php

        $categorydata = App\Models\Category::with('subCategoryName')->get();

        ?>

        <header class="header header--1" data-sticky="true">
            <div class="header__top">
                <div class="ps-container">
                    <div class="header__left">
                        <div class="menu--product-categories">
                            <div class="menu__toggle"><i class="icon-menu"></i><span> &ensp;All categories</span></div>
                            <div class="menu__content" style="">
                                <ul class="menu--dropdown">
                                <li>
                                <a href="">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.1442 3.9858C10.9228 3.93743 10.7042 4.07756 10.6558 4.29886C10.6496 4.32762 10.4982 4.90231 10.2778 5.73654L9.87535 5.57102L8.99488 5.20899C8.68754 5.08321 8.66758 4.81825 8.68836 4.65556C8.71734 4.42997 8.70285 4.19946 8.6282 3.98427C8.47289 3.53665 8.13082 3.15274 7.69195 2.93345C7.55532 2.87739 7.45989 2.84608 7.40236 2.82932C8.00061 2.89946 8.55675 2.49204 8.66356 1.8917L8.75546 1.34748C8.8659 0.724373 8.45173 0.129154 7.82709 0.0178922C7.20373 -0.092932 6.60884 0.322556 6.49804 0.946185L6.40614 1.49041C6.30754 2.04505 6.62577 2.57683 7.13619 2.76547C7.05689 2.7524 6.97877 2.74584 6.90221 2.74584C6.15518 2.74584 5.5569 3.34604 5.42127 4.09225L4.70159 7.32838C6.16289 7.59307 7.44797 7.82609 7.84639 7.89822L7.92377 7.41533L7.66592 7.36721C6.81608 7.20834 6.24295 6.41318 6.36108 5.55678L6.49479 4.58772C6.52569 4.36322 6.73268 4.20654 6.95717 4.23744C7.18166 4.26834 7.33834 4.47533 7.30745 4.69983L7.17373 5.66889C7.11549 6.0908 7.39795 6.48264 7.81659 6.56084C8.2814 6.64449 8.43896 6.71749 9.93045 7.05018C9.66628 8.04897 9.36971 9.16949 9.11323 10.1393C9.00541 9.91887 8.95562 9.85574 8.51888 9.19722C8.3534 8.94768 8.09328 8.77642 7.79862 8.72305L4.52858 8.13067L3.49554 13.069C3.42811 13.5587 3.80958 14 4.30956 14C4.71097 14 5.05358 13.7102 5.11975 13.3145L6.18534 9.26161L7.12952 10.3466C7.55854 10.8396 7.80983 11.4622 7.84319 12.1149L7.90253 13.2847C7.92271 13.6846 8.25348 14 8.65612 14C9.07284 14 9.41081 13.6626 9.41081 13.2464V12.227L10.7503 7.15231C10.9571 7.09002 11.127 6.92424 11.1841 6.70005C11.2399 6.48064 11.1745 6.25711 11.0273 6.10302L11.4572 4.47413C11.5056 4.25284 11.3654 4.03422 11.1442 3.9858Z" fill="black"/>
                                        <path d="M3.90104 7.15041L4.5242 4.3474L2.96342 4.00943L2.95686 4.04115L2.5519 6.01646C2.45154 6.49744 2.77119 6.96256 3.25326 7.04377L3.90049 7.15287C3.90076 7.15205 3.90076 7.15123 3.90104 7.15041Z" fill="black"/>
                                        <path d="M5.50555 2.4254L4.89496 2.31001C4.48754 2.2329 4.07328 2.31739 3.72848 2.5479C3.47855 2.71497 3.28551 2.94493 3.16602 3.21372L4.71859 3.55005C4.87664 3.09559 5.15363 2.70786 5.50555 2.4254Z" fill="black"/>
                                        </svg>

                                Action/Adventure

                                </a>
                                </li>







                                </ul>
                                </div>
                        </div>
                        <a class="ps-logo" href="{{ url('/') }}">
                            <img src="{{ asset('public/assets/img/user/ALHAMBRA_LOGO.svg') }}" alt="" height="60">
                        </a>
                    </div>

                    <div class="header__center">
                        <form class="ps-form--quick-search" action="#" method="get">
                            <div class="form-group--icon">
                                <div class="product-cat-label">{{ __('All') }}</div>
                                <select class="form-control product-category-select" name="categories[]">
                                    <option value="0">{{ __('All') }}</option>

                                    @foreach($categorydata as $category)
                                    <option class="level-0" value="{{ $category->id }}" >{{ $category->title }}</option>
                                    @endforeach


                                </select>
                            </div>
                            <input class="form-control" name="q" type="text" placeholder="" id="input-search">
                            <div class="spinner-icon">
                                <i class="fa fa-spin fa-spinner"></i>
                            </div>
                            <button type="submit">Search</button>
                            <div class="ps-panel--search-result"></div>
                        </form>
                    </div>
                    <div class="header__right">
                        <div class="header__actions">

                            <a class="header__extra btn-wishlist" href="#">
                                {{-- chart --}}
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M32.625 33.75H3.375C2.75378 33.75 2.25 33.2462 2.25 32.625V3.375C2.25 2.75378 2.75378 2.25 3.375 2.25C3.99622 2.25 4.5 2.75378 4.5 3.375V31.5H32.625C33.2468 31.5 33.75 32.0038 33.75 32.625C33.75 33.2462 33.2468 33.75 32.625 33.75Z" fill="white"/>
                                    <path d="M13.5 29.25C12.8788 29.25 12.375 28.7462 12.375 28.125V21.375H9V28.125C9 28.7462 8.49622 29.25 7.875 29.25C7.25378 29.25 6.75 28.7462 6.75 28.125V20.25C6.75 19.6288 7.25378 19.125 7.875 19.125H13.5C14.1212 19.125 14.625 19.6288 14.625 20.25V28.125C14.625 28.7462 14.1212 29.25 13.5 29.25Z" fill="white"/>
                                    <path d="M22.5 29.25C21.8782 29.25 21.375 28.7462 21.375 28.125V4.5H18V28.125C18 28.7462 17.4962 29.25 16.875 29.25C16.2538 29.25 15.75 28.7462 15.75 28.125V3.375C15.75 2.75378 16.2538 2.25 16.875 2.25H22.5C23.1218 2.25 23.625 2.75378 23.625 3.375V28.125C23.625 28.7462 23.1218 29.25 22.5 29.25Z" fill="white"/>
                                    <path d="M31.5 29.25C30.8782 29.25 30.375 28.7462 30.375 28.125V14.625H27V28.125C27 28.7462 26.4968 29.25 25.875 29.25C25.2532 29.25 24.75 28.7462 24.75 28.125V13.5C24.75 12.8788 25.2532 12.375 25.875 12.375H31.5C32.1218 12.375 32.625 12.8788 32.625 13.5V28.125C32.625 28.7462 32.1218 29.25 31.5 29.25Z" fill="white"/>
                                    </svg>


                                <span><i>3</i></span></a>

                            <a class="header__extra btn-wishlist" href="#">
                                {{-- icon-heart --}}
                                <svg width="36" height="33" viewBox="0 0 36 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 32.9972C17.4875 32.9972 16.9934 32.8115 16.6083 32.4742C15.154 31.2026 13.7519 30.0075 12.5148 28.9534L12.5085 28.9479C8.88162 25.8572 5.74969 23.188 3.57056 20.5587C1.13461 17.6194 0 14.8324 0 11.7878C0 8.82974 1.01431 6.10074 2.8559 4.10315C4.71945 2.08194 7.27652 0.96875 10.0569 0.96875C12.1349 0.96875 14.0381 1.62573 15.7132 2.9213C16.5586 3.57526 17.3249 4.37561 18 5.30917C18.6754 4.37561 19.4414 3.57526 20.2871 2.9213C21.9622 1.62573 23.8653 0.96875 25.9434 0.96875C28.7235 0.96875 31.2808 2.08194 33.1444 4.10315C34.986 6.10074 36 8.82974 36 11.7878C36 14.8324 34.8657 17.6194 32.4297 20.5585C30.2506 23.188 27.1189 25.8569 23.4926 28.9474C22.2534 30.0031 20.849 31.2001 19.3914 32.4748C19.0066 32.8115 18.5122 32.9972 18 32.9972ZM10.0569 3.07758C7.87253 3.07758 5.86588 3.94934 4.40607 5.53247C2.92456 7.1395 2.10855 9.36093 2.10855 11.7878C2.10855 14.3484 3.06024 16.6385 5.19406 19.2132C7.25647 21.7019 10.3241 24.3161 13.876 27.3431L13.8826 27.3486C15.1243 28.4068 16.532 29.6065 17.997 30.8875C19.4708 29.6041 20.8806 28.4024 22.1248 27.3425C25.6764 24.3155 28.7438 21.7019 30.8062 19.2132C32.9398 16.6385 33.8914 14.3484 33.8914 11.7878C33.8914 9.36093 33.0754 7.1395 31.5939 5.53247C30.1344 3.94934 28.1275 3.07758 25.9434 3.07758C24.3432 3.07758 22.8741 3.58624 21.5769 4.58929C20.4208 5.48358 19.6155 6.61407 19.1434 7.40509C18.9006 7.81186 18.4732 8.05466 18 8.05466C17.5268 8.05466 17.0994 7.81186 16.8566 7.40509C16.3847 6.61407 15.5794 5.48358 14.4231 4.58929C13.1259 3.58624 11.6568 3.07758 10.0569 3.07758Z" fill="white"/>
                                </svg>
                                <span><i>3</i></span></a>



                            <div class="ps-cart--mini">

                                <a class="header__extra btn-shopping-cart" href="#">
                                    {{-- bag --}}
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 20.0475C16.4388 20.0494 14.9252 19.51 13.717 18.5213C12.5089 17.5326 11.6807 16.1557 11.3737 14.625C11.3492 14.4638 11.3601 14.2991 11.4056 14.1425C11.451 13.9859 11.53 13.841 11.637 13.718C11.744 13.5949 11.8765 13.4966 12.0253 13.4298C12.1741 13.363 12.3356 13.3294 12.4987 13.3312C12.7667 13.3274 13.0273 13.4193 13.2336 13.5905C13.4398 13.7617 13.5782 14.0009 13.6237 14.265C13.8356 15.2763 14.389 16.1839 15.191 16.8353C15.9931 17.4867 16.9948 17.8422 18.0281 17.8422C19.0613 17.8422 20.0631 17.4867 20.8651 16.8353C21.6671 16.1839 22.2206 15.2763 22.4325 14.265C22.478 14.0009 22.6163 13.7617 22.8226 13.5905C23.0288 13.4193 23.2894 13.3274 23.5575 13.3312C23.7205 13.3294 23.8821 13.363 24.0308 13.4298C24.1796 13.4966 24.3121 13.5949 24.4191 13.718C24.5261 13.841 24.6051 13.9859 24.6506 14.1425C24.6961 14.2991 24.7069 14.4638 24.6825 14.625C24.3736 16.1652 23.5372 17.5495 22.3174 18.5393C21.0976 19.5291 19.5708 20.0625 18 20.0475Z" fill="white"/>
                                        <path d="M28.0125 34.875H7.9875C7.52972 34.8756 7.07661 34.783 6.65574 34.603C6.23486 34.4229 5.85502 34.1591 5.53931 33.8276C5.2236 33.4961 4.97863 33.1038 4.8193 32.6747C4.65997 32.2455 4.58961 31.7885 4.6125 31.3313L5.52375 11.9363C5.56146 11.0667 5.93362 10.2454 6.56252 9.64377C7.19141 9.04212 8.02841 8.70669 8.89875 8.70751H27.1012C27.9716 8.70669 28.8086 9.04212 29.4375 9.64377C30.0664 10.2454 30.4385 11.0667 30.4762 11.9363L31.3875 31.3313C31.4104 31.7885 31.34 32.2455 31.1807 32.6747C31.0214 33.1038 30.7764 33.4961 30.4607 33.8276C30.145 34.1591 29.7651 34.4229 29.3443 34.603C28.9234 34.783 28.4703 34.8756 28.0125 34.875ZM8.89875 10.9688C8.60038 10.9688 8.31423 11.0873 8.10325 11.2983C7.89227 11.5092 7.77375 11.7954 7.77375 12.0938L6.8625 31.4438C6.85487 31.5962 6.87832 31.7485 6.93143 31.8916C6.98454 32.0346 7.0662 32.1654 7.17144 32.2759C7.27667 32.3864 7.40329 32.4743 7.54358 32.5343C7.68387 32.5943 7.83491 32.6252 7.9875 32.625H28.0125C28.1651 32.6252 28.3161 32.5943 28.4564 32.5343C28.5967 32.4743 28.7233 32.3864 28.8286 32.2759C28.9338 32.1654 29.0155 32.0346 29.0686 31.8916C29.1217 31.7485 29.1451 31.5962 29.1375 31.4438L28.2262 12.0488C28.2262 11.7504 28.1077 11.4642 27.8967 11.2533C27.6858 11.0423 27.3996 10.9238 27.1012 10.9238L8.89875 10.9688Z" fill="white"/>
                                        <path d="M24.75 9.84375H22.5V7.875C22.5 6.68153 22.0259 5.53693 21.182 4.69302C20.3381 3.84911 19.1935 3.375 18 3.375C16.8065 3.375 15.6619 3.84911 14.818 4.69302C13.9741 5.53693 13.5 6.68153 13.5 7.875V9.84375H11.25V7.875C11.25 6.08479 11.9612 4.3679 13.227 3.10203C14.4929 1.83616 16.2098 1.125 18 1.125C19.7902 1.125 21.5071 1.83616 22.773 3.10203C24.0388 4.3679 24.75 6.08479 24.75 7.875V9.84375Z" fill="white"/>
                                        </svg>

                                    <span><i>

                                    @if(Auth::check())

                                        @if (session()->has('session_id'))

                                            {{ $count = App\Models\Cart::where('user_id',Auth::user()->id)->orWhere('session_id',session()->get('session_id'))->sum('quantity') }}

                                        @else

                                            {{ $count = App\Models\Cart::where('user_id',Auth::user()->id)->sum('quantity') }}

                                        @endif

                                    @else

                                        {{ $count = App\Models\Cart::where('session_id',Session::getId())->sum('quantity') }}


                                    @endif

                                    </i></span></a>
                                    @php

                                        if(Auth::check()){

                                            if (session()->has('session_id')) {

                                                $session_id = Session::get('session_id');
                                                $cart = App\Models\Cart::with(['productName','productAttr','productExpiryName'])->where('user_id',Auth::user()->id)->orWhere('session_id',$session_id)->get();
                                            }
                                            else{

                                                $cart = App\Models\Cart::with(['productName','productAttr','productExpiryName'])->where('user_id',Auth::user()->id)->get();
                                            }

                                        }
                                        else{

                                            $cart = App\Models\Cart::with(['productName','productAttr','productExpiryName'])->where('session_id',Session::getId())->get();

                                        }


                                    @endphp



                                <div class="ps-cart--mobile">
                                    @include('user.layout.cart')
                                </div>
                            </div>

                            <div class="ps-block--user-header">
                                <div class="ps-block__left">
                                    {{-- user --}}
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.7109 16.6201C25.26 15.0323 26.9602 12.2047 26.9602 8.98682C26.9602 4.03143 22.9287 0 17.9734 0C13.018 0 8.98654 4.03143 8.98654 8.98682C8.98654 12.2047 10.6867 15.032 13.2355 16.6198C7.82034 18.5674 3.9375 23.7544 3.9375 29.8317V34.9113C3.9375 35.5125 4.42502 36 5.02625 36H30.9199C31.5211 36 32.0084 35.5125 32.0084 34.9113V29.8317C32.0084 23.7546 28.1258 18.568 22.7109 16.6201ZM29.8312 33.8225H6.11499V29.8317C6.11499 23.2932 11.4343 17.9739 17.9731 17.9739C24.5116 17.9739 29.8312 23.2932 29.8312 29.8317V33.8225ZM24.7827 8.98682C24.7827 12.7417 21.7282 15.7964 17.9734 15.7964C14.2185 15.7964 11.164 12.7417 11.164 8.98682C11.164 5.23224 14.2185 2.17749 17.9734 2.17749C21.7282 2.17749 24.7827 5.23224 24.7827 8.98682Z" fill="white"/>
                                        </svg>

                                </div>
                                <div class="ps-block__right">
                                    @if (Auth::check())
                                        <a href="{{ route('user.overview') }}">{{ Auth::user()->name }}</a>
                                        <form method="post" action="{{ route('user.logout') }}" id="form1">
                                        @csrf
                                            <a href="javascript:void(0)" onclick="document.getElementById('form1').submit()">{{ __('Logout') }}</a>
                                        </form>
                                    @else
                                        <a href="">{{ __('Login') }}</a>
                                        <a href="">{{ __('Register') }}</a>
                                    @endif
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <nav class="navigation">
                <div class="ps-container">
                    <div class="navigation__left">
                        {{-- <div class="menu--product-categories">
                            <div class="menu__toggle"><i class="icon-menu"></i><span>Shop by Department</span></div>
                            <div class="menu__content">
                                <ul class="menu--dropdown">
                                    @include('user.layout.product-categories-dropdown')
                                </ul>
                            </div>
                        </div> --}}
                        <div class="menu--product-categories">
                            <div class="menu__toggle">
                                <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 1H22M0 6H22M0 11H22" stroke="white"/>
                                    </svg>

                                <span> &ensp;&ensp; All categories</span></div>
                            <div class="menu__content" style="">
                            <ul class="menu--dropdown">
                            <li>
                            <a href="https://martfury.botble.com/product-categories/hot-promotions">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1442 3.9858C10.9228 3.93743 10.7042 4.07756 10.6558 4.29886C10.6496 4.32762 10.4982 4.90231 10.2778 5.73654L9.87535 5.57102L8.99488 5.20899C8.68754 5.08321 8.66758 4.81825 8.68836 4.65556C8.71734 4.42997 8.70285 4.19946 8.6282 3.98427C8.47289 3.53665 8.13082 3.15274 7.69195 2.93345C7.55532 2.87739 7.45989 2.84608 7.40236 2.82932C8.00061 2.89946 8.55675 2.49204 8.66356 1.8917L8.75546 1.34748C8.8659 0.724373 8.45173 0.129154 7.82709 0.0178922C7.20373 -0.092932 6.60884 0.322556 6.49804 0.946185L6.40614 1.49041C6.30754 2.04505 6.62577 2.57683 7.13619 2.76547C7.05689 2.7524 6.97877 2.74584 6.90221 2.74584C6.15518 2.74584 5.5569 3.34604 5.42127 4.09225L4.70159 7.32838C6.16289 7.59307 7.44797 7.82609 7.84639 7.89822L7.92377 7.41533L7.66592 7.36721C6.81608 7.20834 6.24295 6.41318 6.36108 5.55678L6.49479 4.58772C6.52569 4.36322 6.73268 4.20654 6.95717 4.23744C7.18166 4.26834 7.33834 4.47533 7.30745 4.69983L7.17373 5.66889C7.11549 6.0908 7.39795 6.48264 7.81659 6.56084C8.2814 6.64449 8.43896 6.71749 9.93045 7.05018C9.66628 8.04897 9.36971 9.16949 9.11323 10.1393C9.00541 9.91887 8.95562 9.85574 8.51888 9.19722C8.3534 8.94768 8.09328 8.77642 7.79862 8.72305L4.52858 8.13067L3.49554 13.069C3.42811 13.5587 3.80958 14 4.30956 14C4.71097 14 5.05358 13.7102 5.11975 13.3145L6.18534 9.26161L7.12952 10.3466C7.55854 10.8396 7.80983 11.4622 7.84319 12.1149L7.90253 13.2847C7.92271 13.6846 8.25348 14 8.65612 14C9.07284 14 9.41081 13.6626 9.41081 13.2464V12.227L10.7503 7.15231C10.9571 7.09002 11.127 6.92424 11.1841 6.70005C11.2399 6.48064 11.1745 6.25711 11.0273 6.10302L11.4572 4.47413C11.5056 4.25284 11.3654 4.03422 11.1442 3.9858Z" fill="black"/>
                                    <path d="M3.90104 7.15041L4.5242 4.3474L2.96342 4.00943L2.95686 4.04115L2.5519 6.01646C2.45154 6.49744 2.77119 6.96256 3.25326 7.04377L3.90049 7.15287C3.90076 7.15205 3.90076 7.15123 3.90104 7.15041Z" fill="black"/>
                                    <path d="M5.50555 2.4254L4.89496 2.31001C4.48754 2.2329 4.07328 2.31739 3.72848 2.5479C3.47855 2.71497 3.28551 2.94493 3.16602 3.21372L4.71859 3.55005C4.87664 3.09559 5.15363 2.70786 5.50555 2.4254Z" fill="black"/>
                                    </svg>

                                    Action/Adventure

                            </a>
                            </li>







                            </ul>
                            </div>
                            </div>
                    </div>
                    <div class="navigation__right">
                        <ul class="menu">
                            <li class="  ">
                                <a href="{{ route('user.home') }}">
Home
                                </a>
                            </li>
                            <li class="  ">
                                <a href="">
                                    best sellers
                                </a>
                            </li>

                            <li class="  ">
                                <a href="#">
                                    Newest eBooks
                                </a>
                            </li>

                            <li class="  ">
                                <a href="#">
                                    Recommended
                                </a>
                            </li>

                            <li class="  ">
                                <a href="#">
                                    Blog
                                </a>
                            </li>
                        </ul>
                        <ul class="navigation__extra">
                            <li><a href="">Sell On Martfury</a></li>
                            <li>
                            <div class="ps-dropdown">
                            <a href=""><span>USD</span></a>
                            <ul class="ps-dropdown-menu">
                            <li><a href="" class="drp-color"><span>EUR</span></a></li>
                            <li><a href="" class="drp-color"><span>VND</span></a></li>
                            </ul>
                            </div>
                            </li>
                            <li>
                            <div class="ps-dropdown language">
                            <a href="">
                                <span>
                                    <img src="https://martfury.botble.com/vendor/core/core/base/images/flags/us.svg" title="English" width="16" alt="English">
                                    English
                                    </span>
                            </a>
                            <ul class="ps-dropdown-menu ">
                            <li class="">
                            <a href="" class="drp-color">
                            <img src="https://martfury.botble.com/vendor/core/core/base/images/flags/vn.svg" title="Tiếng Việt" width="16" alt="Tiếng Việt"> <span>Tiếng Việt</span> </a>
                            </li>
                            </ul>
                            </div>
                            </li>
                            </ul>

                    </div>
                </div>
            </nav>
        </header>


        @include('user.layout.header-mobile')


        <div id="homepage-1">
            <div id="app">
                @yield('content')
            </div>
        </div>



        <div class="ps-panel--sidebar" id="cart-mobile" style="display: none">
            <div class="ps-panel__header">
                <h3>Shopping Cart</h3>
            </div>
            <div class="navigation__content">
                <div class="ps-cart--mobile">
                   @include('user.layout.cart')
                </div>
            </div>
        </div>
        <div class="ps-panel--sidebar" id="navigation-mobile" style="display: none">
            <div class="ps-panel__header">
                <h3>Categories</h3>
            </div>
            <div class="ps-panel__content">
                <ul class="menu--mobile">
                    @include('user.layout.product-categories-dropdown')
                </ul>
            </div>
        </div>

        <div class="navigation--list">
            <div class="navigation__content">
                <a class="navigation__item ps-toggle--sidebar" href="#menu-mobile"><i class="icon-menu"></i><span> {{ __('Menu') }}</span></a>
                <a class="navigation__item ps-toggle--sidebar" href="#navigation-mobile"><i class="icon-list4"></i><span> {{ __('Categories') }}</span></a>
                <a class="navigation__item ps-toggle--sidebar" href="#search-sidebar"><i class="icon-magnifier"></i><span> {{ __('Search') }}</span></a>
                <a class="navigation__item ps-toggle--sidebar" href="#cart-mobile"><i class="icon-bag2"></i><span> {{ __('Cart') }}</span></a></div>
        </div>

        <div class="ps-panel--sidebar" id="search-sidebar" style="display: none">
            <div class="ps-panel__header">
                <form class="ps-form--search-mobile" action="#" method="get">
                    <div class="form-group--nest">
                        <input class="form-control" name="q" value="{{ request()->query('q') }}" type="text" placeholder="{{ __('Search something...') }}">
                        <button type="submit"><i class="icon-magnifier"></i></button>
                    </div>
                </form>
            </div>
            <div class="navigation__content"></div>
        </div>

        <div class="ps-panel--sidebar" id="menu-mobile" style="display: none">
            <div class="ps-panel__header">
                <h3>{{ __('Menu') }}</h3>
            </div>
            <div class="ps-panel__content">
                <ul>
                    <li class="menu-item-has-children current-menu-item ">
                        <a href="#">Menu1</a>
                    </li>
                    <li class="menu-item-has-children current-menu-item ">
                        <a href="#">Menu2</a>
                    </li>
                </ul>
            </div>
        </div>


    @include('user.layout.footer')

    <div id="back2top"><i class="icon icon-arrow-up"></i></div>
    <div class="ps-site-overlay"></div>


    @yield('modal')
    @include('user.layout.script')
    @yield('script')

    <script type="text/javascript">


    </script>

    </body>
</html>
