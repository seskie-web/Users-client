@extends('layouts.front')

@section('content')
<div class="row">
    <div class="col-md-12 mt-5">
        <h2>Content Authors</h2><hr>
    </div>
</div>
    <div class="row mb-5">
        <div class="col-md-5">
            <h2 class="mt-3 mb-3 title-heading bg-info p-3">Create new author</h2>
            @livewire('user-form')
        </div>
        <div class="col-md-7">
            <h2 class="mt-3 mb-3 title-heading bg-success text-white p-3">All Authors</h2>
            @livewire('get-authors')
        </div>
    </div>
@endsection


@push('scripts')
    <script>
        // Simulate page view event
        console.log('Page view tracked:', {
            event: 'pageview',
            page: window.location.pathname,
            timestamp: new Date().toISOString()
        });

        // simulate button save new user click
        $('#btn-submit').on('click', function() {
            console.log('Button save new user tracked:',  {
                event: 'button submit form clicked',
                button: 'save new user/author',
                firstname: $('#firstname').val(),
                lastname: $('#lastname').val(),
                email: $('#email').val(),
                cellphone: $('#cellphone').val(),
                message: $('#message').val(),
                timestamp: new Date().toISOString(),
            });
        });
    </script>
@endpush

